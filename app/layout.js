import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })

export const metadata = {
  title: 'Bar Alemán | Tradición en Villa Devoto',
  description: 'Restaurante alemán tradicional en Buenos Aires. Platos abundantes y ambiente familiar.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}