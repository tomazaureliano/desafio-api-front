
import MovieVitrine from '@/components/MovieVitrine'
import Hero from '@/components/Hero'


interface PageProps {
  searchParams: Promise<{ 
    page?: string; 
    genre?: string; 
    search?: string 
  }>;
}

export default async function Home({ searchParams }: PageProps) {
  // No Next.js 15, precisamos dar 'await' no searchParams
  const params = await searchParams;
  
  const page = params.page || '1';
  const genre = params.genre || '';
  const search = params.search || '';

  return (
    <>
      <Hero />
      <MovieVitrine 
        page={page} 
        genre={genre} 
        search={search} 
      />
    </>
  );
}