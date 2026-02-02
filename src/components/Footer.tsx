// components/Footer.tsx


export default function Footer() {
  return (
    <footer id="contato" className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Seção 1: Marca e Descrição */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">MN</span>
            </div>
            <h2 className="text-white text-2xl font-bold font-oxygen tracking-tighter">
              MovieNight
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Sua vitrine definitiva de cinema. Explore os maiores sucessos mundiais 
            diretamente da API do TMDB com a melhor experiência visual.
          </p>
        </div>

        {/* Seção 2: Links Rápidos */}
        

        {/* Seção 3: Contato (Mock) */}
        <div id="contato" className="space-y-4">
          <h3 className="text-white font-semibold uppercase text-xs tracking-widest">Contato</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-lg">📧</span>
              <span>suporte@movienight.com.br</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📍</span>
              <span>São Paulo, SP - Brasil</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📱</span>
              <span>(11) 99999-9999</span>
            </div>
            
            {/* Redes Sociais Mockadas */}
            <div className="flex gap-4 pt-2">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">
                <span className="text-xs font-bold text-white">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">
                <span className="text-xs font-bold text-white">TW</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">
                <span className="text-xs font-bold text-white">FB</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Direitos Autorais */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} MovieNight. Desenvolvido para fins de portfólio.</p>
        <p className="mt-2 text-zinc-600">Dados fornecidos pela API do TMDB.</p>
      </div>
    </footer>
  );
}