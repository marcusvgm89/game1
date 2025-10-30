export default function CTAFixo() {
  const handleClick = () => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Retro Games Package - Fixed CTA',
        value: 27.00,
        currency: 'BRL'
      });
    }
    if (typeof window.ttq !== 'undefined') {
      window.ttq.track('InitiateCheckout', {
        content_name: 'Retro Games Package',
        value: 27.00,
        currency: 'BRL'
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="#checkout"
        onClick={handleClick}
        className="block w-full text-center text-xl font-bold py-5 px-4 shadow-lg"
        style={{ backgroundColor: 'var(--primary)', color: '#000' }}
      >
        COMPRAR R$27 (OU R$37 COM PS5)
      </a>
    </div>
  );
}
