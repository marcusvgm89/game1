import { useEffect, useState } from 'react';

export default function OfertaTimer() {
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [showUpsell, setShowUpsell] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowUpsell(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="py-16 px-4 bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] p-8 md:p-12 text-center">
          <div className="mb-6">
            <span className="text-2xl md:text-3xl text-gray-500 line-through mr-4">R$297</span>
            <span className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--primary)' }}>
              R$27
            </span>
          </div>

          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            ou 12x de R$2,83 sem juros
          </div>

          {showUpsell && (
            <div className="mb-8 p-6 bg-[#1A1A1A] border-2" style={{ borderColor: 'var(--accent)' }}>
              <div className="text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
                BÔNUS EXCLUSIVO HOJE!
              </div>
              <div className="text-lg text-gray-300 mb-4">
                + 50 jogos PS5 exclusivos por apenas R$10 extras
              </div>
              <div className="text-3xl font-bold text-white">
                TOTAL: R$37 (TUDO INCLUSO)
              </div>
            </div>
          )}

          <div className="mb-8">
            <div className="text-xl md:text-2xl mb-4 text-white">
              OFERTA ACABA EM:
            </div>
            <div className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--primary)' }}>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
          </div>

          <div className="space-y-4">
            {showUpsell && (
              <a
                href="#checkout"
                className="block w-full text-xl md:text-2xl font-bold py-5 px-8 rounded-none transition-transform hover:scale-105 mb-4"
                style={{ backgroundColor: 'var(--accent)', color: '#000' }}
                onClick={() => {
                  if (typeof window.fbq !== 'undefined') {
                    window.fbq('track', 'InitiateCheckout', {
                      content_name: 'Retro Games + PS5 Bundle',
                      value: 37.00,
                      currency: 'BRL'
                    });
                  }
                }}
              >
                QUERO OS DOIS POR R$37
              </a>
            )}
            <a
              href="#checkout"
              className="block w-full text-xl md:text-2xl font-bold py-5 px-8 rounded-none transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--primary)', color: '#000' }}
              onClick={() => {
                if (typeof window.fbq !== 'undefined') {
                  window.fbq('track', 'InitiateCheckout', {
                    content_name: 'Retro Games Package',
                    value: 27.00,
                    currency: 'BRL'
                  });
                }
              }}
            >
              QUERO APENAS O PACOTE RETRO R$27
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
