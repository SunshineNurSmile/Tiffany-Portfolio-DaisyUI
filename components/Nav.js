import Link from "next/link";

const Nav = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/resume'>
                <a>Resume</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <a className='justify-between'>
                Art Works
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </a>
              <ul className='p-2 bg-base-100'>
                <li>
                  <a>2018</a>
                </li>
                <li>
                  <a>2019</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href='/'>
          <a className='btn btn-ghost normal-case text-xl'>Jialin Wang</a>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/resume'>
              <a>Resume</a>
            </Link>
          </li>
          <li tabIndex={0}>
            <a>
              Art Works
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </a>
            <ul className='p-2 bg-base-100 w-full'>
              <li>
                <a>2018</a>
              </li>
              <li>
                <a>2019</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link href="/contact">
          <a className='btn'>Contact Me</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
