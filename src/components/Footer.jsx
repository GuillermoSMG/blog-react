const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-gray-500 h-[6rem] justify-end'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <ul className='flex gap-3'>
          <li>
            <a
              href='https://github.com/GuillermoSMG/blog-react'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/web.svg' alt='Frontend code' title='Frontend Code' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/GuillermoSMG/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/github.svg' alt='Github' title='Github' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/GuillermoSMG/blog_apiRESTful'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/code.svg' alt='Backend Code' title='Backend Code' />
            </a>
          </li>
        </ul>
        <ul className='flex gap-1'>
          <li>Copyright &#169;</li>
          &#8226;
          <li>CodeWord</li>
          &#8226;
          <li>GSM</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
