import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
})

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-lato',
  display: 'swap'
})

export const metadata = {
  title: 'Bar Alemán | Tradición y Sabor Alemán en Villa Devoto',
  description: 'Un clásico de Devoto donde la tradición alemana se sirve en platos abundantes. Salchichas caseras, chucrut, cervezas y ambiente familiar. ¡Reservá tu mesa!',
  keywords: 'restaurante alemán Buenos Aires, Bar Alemán Devoto, comida alemana CABA, salchichas alemanas Buenos Aires',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-aleman-cream text-aleman-black`}>
        {/* Navbar Sticky */}
        <nav className="sticky top-0 z-50 bg-aleman-black text-white py-4 px-6 border-b border-aleman-gold/20">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" className="font-serif text-3xl text-white">Bar Alemán</a>
            <div className="flex gap-6 items-center">
              <a href="/menu" className="hover:text-aleman-gold">Carta</a>
              <a href="/#nosotros" className="hover:text-aleman-gold">Nosotros</a>
              <a href="/#reservas" className="bg-aleman-red text-white px-5 py-2 rounded-sm hover:bg-aleman-gold transition font-bold text-sm uppercase">Reservar</a>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer Corregido */}
        <footer className="bg-aleman-black text-aleman-cream py-16 px-6 mt-20 border-t border-aleman-gold/20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-aleman-gold mb-6 uppercase">Ubicación</h3>
              <p className="text-lg">Av. San Martín 5992,</p>
              <p className="text-lg text-aleman-gray">Villa Devoto, CABA</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-aleman-gold mb-6 uppercase">Horarios</h3>
              <p>Martes a Sábado: 19:00 - 00:00</p>
              <p>Domingo: 12:00 - 16:00 (Almuerzo Familiar)</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-aleman-gold mb-6 uppercase">Contacto</h3>
              <p>Tel: (011) 4500-XXXX</p>
              <a href="#" className="text-aleman-red hover:text-aleman-gold font-bold">WhatsApp Reservas</a>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-white/5 text-sm text-aleman-gray">
            &copy; 2026 Bar Alemán. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  )
}
