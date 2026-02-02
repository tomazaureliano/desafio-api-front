// src/components/SearchBar.tsx
'use client'; // ISSO É OBRIGATÓRIO AQUI

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() { // O "default" é o que resolve o erro "got: object"
  const router = useRouter();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(searchParams.get('search') || '');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Faz a busca e reseta para a página 1
    router.push(`?search=${encodeURIComponent(term)}&page=1#vitrine`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Procurar um filme..."
        className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-full py-3 px-6 focus:outline-none focus:border-red-600 transition-all"
      />
      <button type="submit" className="absolute right-4 top-3">🔍</button>
    </form>
  );
}