export default function Hero() {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: 'url(/assets/images/bghero.png)',
        backgroundPosition: 'top',
      }}
    >
      <div className='hero-overlay bg-opacity-70'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='text-white'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-4xl sm:text-5xl font-bold'>
              {' '}
              &lt; IGORFLORESDEV /&gt;
            </h1>
            <p className='mb-5'>
              Desenvolvedor Full Stack com experiência em desenvolvimento web e
              mobile.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
