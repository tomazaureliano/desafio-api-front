// src/components/ui/MovieCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
}

export default function MovieCard({ id, title, posterPath, rating }: MovieCardProps) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <Link href={`/movie/${id}`} className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 transition-all hover:border-red-600/50">
      {/* Container da Imagem (Fica no fundo) */}
      <div className="aspect-[2/3] relative z-0">
        <Image 
          src={posterPath ? `${IMG_URL}${posterPath}` : '/no-poster.png'} 
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Container do Texto (Trazemos para frente com z-10) */}
      <div className="p-3 relative z-10 bg-zinc-900">  {/* <-- MUDANÇA AQUI: Adicionado 'relative z-10 bg-zinc-900' */}
        <h3 className="text-white text-sm font-semibold truncate group-hover:text-red-500 transition-colors">
          {title}
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-xs font-bold">★ {rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}