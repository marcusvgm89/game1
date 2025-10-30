import { useEffect, useState } from 'react';

const benefits = [
  {
    title: '2.000+ jogos clássicos em 1 clique',
    description: 'Biblioteca completa de NES, SNES, Mega Drive, PS1, Arcade e muito mais'
  },
  {
    title: 'Funciona em PC, Android, TV Box',
    description: 'Jogue em qualquer dispositivo, qualquer lugar, qualquer hora'
  },
  {
    title: 'Atualizações mensais grátis',
    description: 'Novos jogos adicionados todo mês sem custo adicional'
  }
];

export default function Beneficios3() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('beneficios');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" className="py-16 px-4 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-[#1A1A1A] border p-6 ${visible ? 'fade-in' : 'opacity-0'}`}
              style={{
                borderColor: 'rgba(0, 255, 65, 0.2)',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight" style={{ color: 'var(--primary)' }}>
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
