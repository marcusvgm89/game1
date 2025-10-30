import { useEffect } from 'react';

export default function HeroLow() {
  useEffect(() => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'ViewContent', {
        content_name: 'Hero View',
        content_category: 'Retro Games Package',
        value: 27.00,
        currency: 'BRL'
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,48,0.3),transparent_50%)]"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 glitch leading-tight" style={{ color: 'var(--primary)' }}>
          RELIVE A ERA DOURADA DOS GAMES
        </h1>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--accent)' }}>
          2.000+ JOGOS RETRÔ (NES, SNES, Mega, PS1, Arcade)
        </p>

        <div className="mb-8">
          <div className="text-6xl md:text-7xl font-bold text-white mb-2">
            APENAS R$27
          </div>
          <div className="text-2xl md:text-3xl text-gray-300">
            ou 12x de R$2,83
          </div>
        </div>

        <a
          href="#checkout"
          className="inline-block text-xl md:text-2xl font-bold py-5 px-8 rounded-none shadow-neon transition-transform hover:scale-105"
          style={{ backgroundColor: 'var(--primary)', color: '#000' }}
          onClick={() => {
            if (typeof window.fbq !== 'undefined') {
              window.fbq('track', 'AddToCart', {
                content_name: 'Retro Games Package',
                value: 27.00,
                currency: 'BRL'
              });
            }
          }}
        >
          QUERO MEUS JOGOS AGORA
        </a>
      </div>
    </section>
  );
}
