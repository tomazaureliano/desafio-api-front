// components/MovieVitrine.tsx
import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';


const GENRES = [
  { id: '', name: 'Todos' },
  { id: '28', name: 'Ação' },
  { id: '35', name: 'Comédia' },
  { id: '18', name: 'Drama' },
  { id: '27', name: 'Terror' },
  { id: '878', name: 'Ficção' },
];

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export async function getMovies(page: number = 1, genreId?: string, query?: string) {
  let endpoint = 'movie/popular';
  let params = `&page=${page}`;

  // Prioridade 1: Busca por texto
  if (query) {
    endpoint = 'search/movie';
    params += `&query=${encodeURIComponent(query)}`;
  } 
  // Prioridade 2: Filtro por gênero
  else if (genreId) {
    endpoint = 'discover/movie';
    params += `&with_genres=${genreId}`;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR${params}`,
    { next: { revalidate: 3600 } }
  );
  
  const data = await res.json();
  return {
    results: data.results as Movie[],
    totalPages: data.total_pages as number,
  };
}

export default async function MovieVitrine({ 
  page = '1', 
  genre = '',
  search = '' 
}: { 
  page?: string, 
  genre?: string,
  search?: string 
}) {
  const currentPage = parseInt(page);
  const { results: movies, totalPages } = await getMovies(currentPage, genre, search);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <section id="vitrine" className="py-20 bg-zinc-950 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl font-bold text-white font-oxygen">
            {search ? `Resultados para: ${search}` : 'Explorar Catálogo'}
          </h2>
          
          {/* Aqui é onde o erro acontece se o SearchBar não for exportado como DEFAULT */}
          <SearchBar />
        </div>

        {/* --- BARRA DE FILTROS (Escondida se estiver buscando por texto para não confundir) --- */}
        {!search && (
          <div className="flex flex-wrap gap-3 mb-12">
            {GENRES.map((g) => (
              <Link
                key={g.id}
                href={`?genre=${g.id}&page=1#vitrine`}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  genre === g.id ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                {g.name}
              </Link>
            ))}
          </div>
        )}

        {/* Grid de Filmes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="group relative bg-zinc-900 rounded-lg overflow-hidden transition-transform hover:scale-105 border border-zinc-800">
                <img 
                  src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : '/no-poster.png'} 
                  alt={movie.title}
                  className="w-full h-auto object-cover aspect-[2/3]"
                />
                <div className="p-4">
                  <h3 className="text-white text-sm font-semibold truncate">{movie.title}</h3>
                </div>
              </div>
            ))
          ) : (
            <p className="text-zinc-500 col-span-full text-center py-20">Nenhum filme encontrado para essa busca. 🍿</p>
          )}
        </div>

        {/* Paginação atualizada para incluir a busca */}
        <div className="flex justify-center items-center gap-6 mt-16">
           {currentPage < totalPages && (
             <Link 
                href={`?search=${search}&genre=${genre}&page=${currentPage + 1}#vitrine`}
                className="px-6 py-2 bg-zinc-900 text-white rounded-full hover:bg-red-600 transition-all"
             > 
               Próxima 
             </Link>
           )}
        </div>
      </div>
    </section>
  );
}