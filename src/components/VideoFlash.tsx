export default function VideoFlash() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--accent)' }}>
          VEJA 60s DE GAMEPLAY ÉPICO
        </h2>

        <div className="relative aspect-video mb-6 bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&modestbranding=1"
            title="Gameplay Retro Games"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <p className="text-lg md:text-xl text-center mb-6 text-gray-300">
          Mario, Sonic, Street Fighter rodando liso
        </p>

        <div className="text-center">
          <a
            href="#checkout"
            className="inline-block text-lg md:text-xl font-bold py-4 px-8 rounded-none transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--primary)', color: '#000' }}
          >
            GARANTA POR R$27
          </a>
        </div>
      </div>
    </section>
  );
}
