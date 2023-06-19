import ProjectCard from '../Projects/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Pandora',
      text: 'Poderoso de controle de estoque com front-end feito em Next.js, Backend em Node.js (Express) e banco de dados mongodb.',
      src: 'pandora.png',
      button: {
        text: 'Ver projeto',
        href: 'https://pandora-igorfloresdev.vercel.app',
        github: 'https://github.com/igorfloresdev/pandora-web',
      },
      badges: [
        {
          text: 'Next.js',
        },
        {
          text: 'Node.js',
        },
        {
          text: 'Express',
        },
        {
          text: 'Tailwind',
        },
      ],
    },
    {
      title: 'MyBox',
      text: 'Aplicativo de controle de estoque feito em React.JS. Login: igorflores | Senha: igorfloresdev',
      src: 'mybox.png',
      button: {
        text: 'Ver projeto',
        href: 'https://mybox.vercel.app',
        github: 'https://github.com/igorfloresdev/mybox',
      },
      badges: [
        {
          text: 'React',
        },
        {
          text: 'Tailwind',
        },
      ],
    },
    {
      title: 'Organo',
      text: 'Organizador empresarial de equipes na área de TI',
      src: 'organo.png',
      button: {
        text: 'Ver projeto',
        href: 'https://organo-igordev.vercel.app',
        github: 'https://github.com/igorfloresdev/organo',
      },
      badges: [
        {
          text: 'React',
        },
        {
          text: 'CSS',
        },
      ],
    },
    {
      title: 'Lobo',
      text: 'Projeto de portfólio online.',
      src: 'lobo.png',
      button: {
        text: 'Ver projeto',
        href: 'https://igorfloresdev.github.io/lobo/',
        github: 'https://github.com/igorfloresdev/lobo',
      },
      badges: [
        {
          text: 'HTML',
        },
        {
          text: 'CSS',
        },
        {
          text: 'Javascript',
        },
      ],
    },
    {
      title: 'Bikecraft',
      text: 'Projeto de site de vendas de bicicletas.',
      src: 'bikcraft.png',
      button: {
        text: 'Ver projeto',
        href: 'https://igorfloresdev.github.io/bikcraft/',
        github: 'https://github.com/igorfloresdev/bikcraft',
      },
      badges: [
        {
          text: 'HTML',
        },
        {
          text: 'CSS',
        },
        {
          text: 'Javascript',
        },
      ],
    },
    {
      title: 'Flexblog',
      text: 'Blog feito totalmente com Flexbox.',
      src: 'flexblog.png',
      button: {
        text: 'Ver projeto',
        href: 'https://igorfloresdev.github.io/flexblog/',
        github: 'https://github.com/igorfloresdev/flexblog',
      },
      badges: [
        {
          text: 'HTML',
        },
        {
          text: 'CSS',
        },
        {
          text: 'Javascript',
        },
      ],
    },
  ]

  return (
    <>
      <h1 className='text-3xl text-center font-bold pb-14' id='projects'>
        Projetos
      </h1>
      <div className='flex flex-wrap justify-center gap-16'>
        {projects.map((project) => (
          <div className='flex' key={project.title} data-key={project.title}>
            <ProjectCard
              src={project.src}
              title={project.title}
              text={project.text}
              button={project.button}
              badges={project.badges}
              alt={project.title}
            ></ProjectCard>
          </div>
        ))}
      </div>
    </>
  )
}
