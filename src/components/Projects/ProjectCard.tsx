import Image from 'next/image'

type ProjectCardProps = {
  src: string
  alt: string
  title: string
  text: string
  button: {
    href: string
    text: string
    github: string
  }
  badges?: {
    text: string
  }[]
}

export default function ProjectCard({
  src,
  alt,
  title,
  text,
  button,
  badges,
}: ProjectCardProps) {
  return (
    <div className='card w-96 bg-base-300 shadow-xl mb-8'>
      {src !== undefined ? (
        <figure>
          <Image
            width={400}
            height={200}
            src={`/assets/images/projects/${src}`}
            alt={alt}
          />
        </figure>
      ) : (
        ''
      )}
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{text}</p>
        <div className='card-actions justify-end py-4'>
          {button.github !== undefined ? (
            <button className='btn btn-ghost'>
              <a target='_blank' rel='noreferrer' href={button.github}>
                <Image
                  src='/assets/icons/github-white.svg'
                  alt='github'
                  width={40}
                  height={40}
                />
              </a>
            </button>
          ) : (
            ''
          )}
          {button !== undefined ? (
            <button className='btn btn-primary'>
              <a target='_blank' rel='noreferrer' href={button.href}>
                {button.text}
              </a>
            </button>
          ) : (
            ''
          )}
        </div>
        <div className='card-actions justify-end'>
          {badges !== undefined
            ? badges.map((badge) => (
                <div key={badge.text} className='badge badge-outline'>
                  {badge.text}
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  )
}
