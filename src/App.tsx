import HeroLow from './components/HeroLow';
import Beneficios3 from './components/Beneficios3';
import VideoFlash from './components/VideoFlash';
import OfertaTimer from './components/OfertaTimer';
import DepoimentosRapidos from './components/DepoimentosRapidos';
import FAQMini from './components/FAQMini';
import CTAFixo from './components/CTAFixo';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <HeroLow />
      <Beneficios3 />
      <VideoFlash />
      <OfertaTimer />
      <DepoimentosRapidos />
      <FAQMini />
      <CTAFixo />

      <section id="checkout" className="py-16 px-4 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--primary)' }}>
            CHECKOUT SEGURO
          </h2>
          <div className="bg-[#1A1A1A] p-8 md:p-12 border" style={{ borderColor: 'var(--accent)' }}>
            <p className="text-xl mb-6 text-gray-300">
              Integração com Hotmart Sparkle
            </p>
            <p className="text-sm text-gray-400 mb-8">
              Substitua este texto com seu link de checkout real da Hotmart
            </p>
            <a
              href="https://pay.hotmart.com/YOUR_PRODUCT_ID"
              className="inline-block text-2xl font-bold py-5 px-8 rounded-none shadow-neon transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--primary)', color: '#000' }}
              onClick={() => {
                if (typeof window.fbq !== 'undefined') {
                  window.fbq('track', 'Purchase', {
                    content_name: 'Retro Games Package',
                    value: 27.00,
                    currency: 'BRL'
                  });
                }
                if (typeof window.ttq !== 'undefined') {
                  window.ttq.track('CompletePayment', {
                    content_name: 'Retro Games Package',
                    value: 27.00,
                    currency: 'BRL'
                  });
                }
              }}
            >
              FINALIZAR COMPRA
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-[#0F0F0F] text-center text-sm text-gray-500 border-t border-gray-800">
        <p>© 2024 Jogos Retro - Todos os direitos reservados</p>
        <p className="mt-2">Termos de Uso | Política de Privacidade</p>
      </footer>
    </div>
  );
}

export default App;
