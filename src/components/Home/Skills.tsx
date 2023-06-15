import Image from 'next/image'

export default function Skills() {
  const iconSize = 100

  const skills = [
    {
      name: 'HTML5',
      icon: 'html5.svg',
      hideName: false,
    },
    {
      name: 'CSS3',
      icon: 'css3.svg',
      hideName: false,
    },
    {
      name: 'JavaScript',
      icon: 'js.svg',
      hideName: false,
    },
    {
      name: 'TypeScript',
      icon: 'ts.svg',
      hideName: false,
    },
    {
      name: 'React',
      icon: 'react.svg',
      hideName: false,
    },
    {
      name: 'Next.js',
      icon: 'nextjs.svg',
      hideName: false,
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwind.svg',
      hideName: false,
    },
    {
      name: 'Node.js',
      icon: 'node.svg',
      hideName: true,
    },
    {
      name: 'Express.js',
      icon: 'express.svg',
      hideName: true,
    },
    {
      name: 'Prisma ORM',
      icon: 'prisma.svg',
      hideName: true,
    },
    {
      name: 'MySQL',
      icon: 'mysql.svg',
      hideName: true,
    },
    {
      name: 'Microsoft SQL Server',
      icon: 'ms-sql.svg',
      hideName: true,
    },
    {
      name: 'MongoDB',
      icon: 'mongo.svg',
      hideName: true,
    },
    {
      name: 'GitHub',
      icon: 'github.svg',
      hideName: false,
    },
  ]

  return (
    <>
      <h1 className='text-3xl text-center font-bold pb-14'>
        Técnologias que uso
      </h1>
      <div className='flex flex-wrap gap-x-32 gap-y-12 items-center justify-center my-32'>
        {skills.map((skill) => (
          <div className='flex flex-col items-center'>
            <p className='text-lg text-center font-bold'>
              {skill.hideName ? '\u00A0' : skill.name}
            </p>
            <div className='flex items-center h-32'>
              <Image
                src={`assets/icons/${skill.icon}`}
                width={iconSize}
                height={iconSize}
                alt={skill.name}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
