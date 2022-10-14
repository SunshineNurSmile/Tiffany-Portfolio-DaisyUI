import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
      </Head>
      <div
        className='hero min-h-screen'
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
            <p className='mb-5'>
              Excepteur voluptate quis sunt elit ex pariatur consequat exercitation nulla qui ex laboris. Velit sunt excepteur cillum ex eu exercitation cupidatat nisi ipsum sunt occaecat proident elit. Laboris adipisicing do officia magna id dolor est exercitation Lorem. Cupidatat enim reprehenderit incididunt duis aliquip qui elit. Laboris duis esse qui nisi anim ad proident reprehenderit sit culpa do.
            </p>
            <button className='btn btn-primary'>Explore My Works</button>
          </div>
        </div>
      </div>
    </div>
  );
}
