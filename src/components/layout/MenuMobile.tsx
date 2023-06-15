export default function MenuMobile() {
  return (
    <div className='navbar'>
      <div className='flex-none'>
        <div className='flex justify-end w-screen dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost avatar mr-8 mt-4'>
            <div className='w-10 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-10 h-10 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72'
          >
            <li>
              <a href='#home'>Início</a>
            </li>
            <li>
              <a href='#aboutme'>Sobre mim</a>
            </li>
            <li>
              <a href='#skills'>Tecnologias</a>
            </li>
            <li>
              <a href='#projects'>Portfólio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
