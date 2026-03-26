import { Utensils, Calendar, MapPin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[85vh] flex items-center justify-center text-center bg-aleman-black text-white px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599940824399-b87987cb947a?q=80&w=2000')] bg-cover bg-center opacity-40"></div>
        <div className="z-10">
          <h1 className="text-6xl md:text-8xl mb-4 font-serif">Bar Alemán</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans italic text-aleman-gold tracking-widest">TRADICIÓN EN VILLA DEVOTO</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/menu" className="bg-aleman-red px-10 py-4 rounded-sm font-bold uppercase hover:bg-aleman-gold transition-colors duration-300">
              Ver la Carta
            </Link>
            <button className="border-2 border-white px-10 py-4 rounded-sm font-bold uppercase hover:bg-white hover:text-aleman-black transition-all">
              Reservar Mesa
            </button>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-24 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl text-aleman-red mb-6 uppercase tracking-tight">Nuestra Historia</h2>
          <p className="text-lg leading-relaxed text-aleman-gray mb-4">
            Un pedazo de Baviera en el corazón de Villa Devoto. Fundado bajo la premisa de traer los sabores auténticos de Alemania a Buenos Aires, el <strong>Bar Alemán</strong> se ha convertido en un pilar de la gastronomía de barrio.
          </p>
          <p className="text-lg leading-relaxed text-aleman-gray">
            Desde hace décadas, nuestras puertas se abren para recibir a familias que buscan la textura perfecta de un brezel recién horneado y la calidez de un brindis con la mejor cerveza tirada. La abundancia es nuestra norma.
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-aleman-gray h-64 rounded-sm"></div>
            <div className="bg-aleman-gold h-64 rounded-sm mt-8"></div>
        </div>
      </section>

      <footer className="bg-aleman-black text-aleman-cream py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 border-t border-aleman-gray pt-12">
          <div>
            <h3 className="text-2xl text-aleman-gold mb-6 uppercase">Ubicación</h3>
            <p className="flex items-center gap-3 text-lg"><MapPin size={20} className="text-aleman-red"/> Av. San Martín 5992, CABA</p>
            <p className="mt-4 text-aleman-gray">Villa Devoto, Buenos Aires.</p>
          </div>
          <div>
            <h3 className="text-2xl text-aleman-gold mb-6 uppercase">Horarios</h3>
            <ul className="space-y-2 text-lg">
              <li className="flex justify-between"><span>Lun - Vie:</span> <span>19:00 - 00:00</span></li>
              <li className="flex justify-between font-bold text-white"><span>Sáb - Dom:</span> <span>12:00 - 01:00</span></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl text-aleman-gold mb-6 uppercase">Seguinos</h3>
            <a href="#" className="flex items-center gap-2 hover:text-aleman-red transition">
                <Instagram size={24}/> @baraleman_devoto
            </a>
          </div>
        </div>
        <div className="text-center mt-16 text-sm text-aleman-gray">
          &copy; 2024 Bar Alemán. Tradición y Calidad.
        </div>
      </footer>
    </main>
  );
}