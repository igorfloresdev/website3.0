import About from '@/components/Home/About'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Skills from '@/components/Home/Skills'
export default function Home() {
  return (
    <main className='h-screen'>
      <section className='min-h-screen' id='home'>
        <Hero />
      </section>
      <section className='min-h-screen py-20 px-16' id='aboutme'>
        <About />
      </section>
      <section
        className='min-h-screen py-20 px-16 bg-white text-black'
        id='skills'
      >
        <Skills />
      </section>
      <section className='min-h-screen py-20 px-16' id='projects'>
        <Projects />
      </section>
    </main>
  )
}
