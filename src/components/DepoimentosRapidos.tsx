const testimonials = [
  {
    name: 'Mateus G.',
    rating: 5,
    text: 'Voltei pra infância em 5min! Mario Bros nunca esteve tão nostálgico. Perfeito!'
  },
  {
    name: 'Ana R.',
    rating: 5,
    text: 'Roda até no meu cel velho! Jogando Sonic no ônibus todo dia. Viciante demais!'
  },
  {
    name: 'Lucas P.',
    rating: 5,
    text: 'Melhor R$27 investido! Biblioteca gigante, qualidade top. Vale cada centavo!'
  }
];

export default function DepoimentosRapidos() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: 'var(--accent)' }}>
          O QUE OS GAMERS ESTÃO DIZENDO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-none border"
              style={{ borderColor: 'rgba(255, 59, 48, 0.2)' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-3xl mr-4">
                  🎮
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-2xl" style={{ color: 'var(--accent)' }}>
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
