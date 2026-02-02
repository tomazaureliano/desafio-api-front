import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#1E1E1E] overflow-hidden">
      {/* Container Principal (Mantendo sua estrutura de posicionamento do Figma) */}
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        
        {/* Título Principal */}
        <h2 style={{
          left: '394px', 
          top: '97px', 
          position: 'absolute', 
          textAlign: 'center', 
          color: 'white', 
          fontSize: '96px', 
          fontFamily: 'Oxygen', 
          fontWeight: '700'
        }}>
          Não sabe o que assistir?<br/>Deixa com a MovieNight!
        </h2>

        {/* Subtítulo/Descrição */}
        <p style={{
          left: '81px', 
          top: '510px', 
          position: 'absolute', 
          textAlign: 'center', 
          color: 'white', 
          fontSize: '24px', 
          fontFamily: 'Oxygen', 
          fontWeight: '700'
        }}>
          A MovieNight oferece um catálogo atualizado e preciso sobre<br/>
          os filmes que fazem sucesso!<br/>
          Utilize filtros e descubra o melhor filme pra sua noite de cinema!
        </p>

        {/* --- BOTÃO CTA (Ver Agora!) --- */}
        <Link 
          href="#vitrine" 
          className="transition-all duration-300 hover:scale-105 active:scale-95 group"
          style={{
            width: '633px', 
            height: '183px', 
            left: '130px', 
            top: '707px', 
            position: 'absolute', 
            background: '#242938', 
            borderRadius: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <span style={{
            color: 'white', 
            fontSize: '96px', 
            fontFamily: 'Oxygen', 
            fontWeight: '700'
          }} className="group-hover:text-red-500 transition-colors">
            Ver Agora!
          </span>
        </Link>

        {/* Imagem de Destaque */}
        <img 
          style={{
            width: '862px', 
            height: '485px', 
            left: '960px', 
            top: '446px', 
            position: 'absolute', 
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.44)', 
            borderRadius: '50px'
          }} 
          src="/images/imgPage.svg" 
          alt="Preview da Vitrine"
        />
      </div>
    </section>
  );
}