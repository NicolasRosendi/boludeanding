import menuData from '@/data/MenuData.json';
import Image from 'next/image';

export default function MenuPage() {
  return (
    <main className="bg-aleman-cream min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-20 border-b-2 border-aleman-gold/20 pb-12">
          <h1 className="font-serif text-6xl text-aleman-red uppercase tracking-tight mb-4">
            Nuestra Carta
          </h1>
          <p className="text-xl text-aleman-gray max-w-2xl mx-auto leading-relaxed">
            Platos tradicionales alemanes, preparados con amor y servidos en porciones abundantes. **Aquí nadie se queda con hambre.**
          </p>
        </div>
        
        {/* Renderizado Dinámico del Menú (Cards) */}
        {menuData.categorias.map((cat) => (
          <section key={cat.id} id={cat.id} className="mb-20">
            <h2 className="font-serif text-4xl text-aleman-gold mb-10 border-l-4 border-aleman-gold pl-6 uppercase">
              {cat.nombre}
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {cat.items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-sm border border-aleman-gold/10 shadow-sm group hover:border-aleman-gold/40 transition">
                  <div className="relative h-48 w-full sm:w-48 flex-shrink-0">
                    <Image 
                      src={item.foto} 
                      alt={item.nombre} 
                      fill 
                      className="object-cover rounded-sm group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-aleman-black group-hover:text-aleman-red transition-colors">
                        {item.nombre}
                      </h3>
                      <p className="text-aleman-gray italic mt-2 leading-relaxed">{item.descripcion}</p>
                    </div>
                    <div className="mt-6 sm:mt-0 flex justify-between items-center border-t border-aleman-gold/10 pt-4">
                      <span className="font-serif font-bold text-3xl text-aleman-black">
                        ${item.precio}
                      </span>
                      {/* Opcional: Icono o detalle alemán */}
                      <span className="text-3xl">🇩🇪</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        
        {/* Cierre Técnico */}
        <div className="text-center mt-20 text-aleman-gray border-t border-aleman-gold/20 pt-10">
          <p className="font-serif italic text-lg">Precios sujetos a cambios sin previo aviso. Todos los precios incluyen IVA.</p>
        </div>
      </div>
    </main>
  );
}
