import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <div className="flex  flex-col items-center justify-center  ">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen ">
        <h1 className="text-3xl">Home </h1>
        <p>Browse the different rendering method in next 12 and next 13 </p>
      </main>
    </div>
  );
};

export default Home;
