import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button"; 

async function getMovieDetails(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  if (!movie) return <div className="text-white p-20">Filme não encontrado.</div>;

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-oxygen">
      <section 
        className="relative w-full min-h-[70vh] flex items-end pb-12 bg-cover bg-center"
        style={{ 
          backgroundImage: `
            linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(9, 9, 11, 1) 100%), 
            linear-gradient(270deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 59%), 
            url('${backdropUrl}')
          ` 
        }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full z-10">
          <h1 className="text-5xl md:text-8xl font-bold mb-4 [text-shadow:_0px_4px_5px_rgb(0_0_0_/_0.8)]">
            {movie.title}
          </h1>
          <p className="max-w-2xl text-xl text-zinc-300 mb-10 leading-relaxed">
            {movie.overview}
          </p>
          
          <Link href="/#vitrine">
          
            <Button variant="outline" size="lg" className="rounded-[56px] border-2">
              ← Voltar ao Catálogo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}