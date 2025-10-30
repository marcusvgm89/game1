import { useState } from 'react';

const faqs = [
  {
    question: 'Precisa de emulador?',
    answer: 'Não! Tudo vem pré-configurado. É só baixar, instalar e jogar. Simples assim.'
  },
  {
    question: 'Funciona offline?',
    answer: 'Sim! Após o download, jogue sem internet. Perfeito para viagens e qualquer lugar.'
  },
  {
    question: 'Atualiza sozinho?',
    answer: 'Sim! Receba novos jogos automaticamente todo mês sem pagar nada extra.'
  }
];

export default function FAQMini() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-[#0F0F0F]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: 'var(--accent)' }}>
          PERGUNTAS FREQUENTES
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors hover:bg-[#252525]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base md:text-lg font-bold" style={{ color: 'var(--accent)' }}>
                  {faq.question}
                </span>
                <span className="text-2xl" style={{ color: 'var(--accent)' }}>
                  {openIndex === index ? '▼' : '▶'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
