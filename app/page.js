import menuData from '@/data/MenuData.json';
import Image from 'next/image';

export default function Home() {
  // Tomamos los primeros 3 platos para la sección destacados
  const destacados = menuData.categorias[1].items.slice(0, 3);

  return (
    <main>
      {/* 4.1 Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center bg-aleman-black text-white px-4">
        {/* Imagen de fondo (platos reales) con opacidad para contraste */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1599940824399-b87987cb947a?q=80&w=2000" 
            alt="Platos tradicionales alemanes" 
            fill 
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="z-10 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-8xl mb-4 leading-tight">Tradición Alemana en <span className="text-aleman-red">Buenos Aires</span></h1>
          <p className="font-sans text-xl md:text-2xl mb-12 text-aleman-cream tracking-wide font-light">Un clásico de Villa Devoto donde la abundancia y el sabor auténtico se sirven en cada plato.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/menu" className="bg-aleman-red text-white px-10 py-4 rounded-sm font-bold uppercase hover:bg-aleman-gold transition-colors duration-300 text-lg">
              Ver la Carta
            </a>
            <a href="#reservas" className="border-2 border-white px-10 py-4 rounded-sm font-bold uppercase hover:bg-white hover:text-aleman-black transition-all text-lg">
              Reservar Mesa
            </a>
          </div>
        </div>
      </section>

      {/* 4.2 Destacados (Grid 3 columnas) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl text-center text-aleman-black mb-16 uppercase tracking-tight">Los Clásicos de Siempre</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {destacados.map((plato) => (
              <div key={plato.id} className="bg-aleman-cream border border-aleman-gold/20 rounded-sm overflow-hidden group shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image src={plato.foto} alt={plato.nombre} fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-aleman-red mb-3">{plato.nombre}</h3>
                  <p className="text-aleman-gray leading-relaxed mb-4">{plato.descripcion}</p>
                  <p className="font-serif font-bold text-2xl text-aleman-black">${plato.precio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.3 Sobre el lugar & 4.4 Opiniones */}
      <section id="nosotros" className="py-24 px-6 bg-aleman-cream border-y border-aleman-gold/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl text-aleman-red mb-8 uppercase tracking-tight">Un Pedazo de Baviera en Devoto</h2>
            <p className="text-xl leading-relaxed text-aleman-gray mb-6">Fundado hace décadas, el **Bar Alemán** es más que un restaurante; es herencia familiar. Nos enorgullece traer las recetas tradicionales de nuestros abuelos a Buenos Aires, sirviendo porciones abundantes en un ambiente clásico y acogedor.</p>
            <p className="text-lg leading-relaxed text-aleman-gray font-bold italic">Aquí nadie se queda con hambre. ¡Prost!</p>
          </div>
          <div className="bg-white p-10 rounded-sm border border-aleman-gold/10 shadow-inner">
            <h3 className="font-serif text-2xl text-aleman-black mb-6">Qué dicen nuestros clientes</h3>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl font-bold text-aleman-gold">4.4 ⭐</span>
              <p className="text-aleman-gray leading-snug">Basado en <span className="font-bold text-aleman-black">500+ reviews</span> en Tripadvisor y Google Maps.</p>
            </div>
            <p className="text-lg text-aleman-gray italic border-l-4 border-aleman-gold pl-6">"Increíble el codillo, enorme y super tierno. El ambiente es muy familiar, te sentís en Alemania. Volveremos sin duda." - Familia García</p>
          </div>
        </div>
      </section>

      {/* 4.5 CTA final de conversión */}
      <section id="reservas" className="py-20 px-6 bg-aleman-red text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl mb-6">¿Tenés Hambre?</h2>
          <p className="text-2xl mb-12 font-light">Reservá tu mesa hoy mismo y vení a disfrutar de la verdadera experiencia alemana en Buenos Aires. Platos abundantes, ambiente familiar y la mejor cerveza tirada.</p>
          <a href="#" className="bg-aleman-black text-white px-12 py-5 rounded-sm font-bold uppercase hover:bg-white hover:text-aleman-red transition-all text-xl shadow-lg">
            Reservar Mesa Ahora
          </a>
        </div>
      </section>
    </main>
  );
}
