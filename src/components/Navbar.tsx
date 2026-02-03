// components/ui/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-red-600 tracking-tighter">
          MOVIE<span className="text-white">NIGHT</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">Início</Link>
          <Link href="/?genre=28" className="hover:text-white transition-colors">Ação</Link>
          <Link href="/?genre=27" className="hover:text-white transition-colors">Terror</Link>
          <Link href="/minha-lista" className="hover:text-white transition-colors">Minha Lista</Link>
        </div>

        <button className="md:hidden text-white">☰</button>
      </div>
    </nav>
  );
};