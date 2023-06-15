import Menu from '@/components/layout/Menu'
import './globals.css'
import { Inconsolata } from 'next/font/google'
import MenuMobile from '@/components/layout/MenuMobile'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: 'igorfloresdev',
  description: 'Desenvolvedor FullStack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang='pt-BR' data-theme='dark'>
      <body className={inconsolata.className}>
        <header className='fixed w-full z-50'>
          <nav className='hidden lg:block'>
            <Menu />
          </nav>
          <nav className='lg:hidden'>
            <MenuMobile />
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
