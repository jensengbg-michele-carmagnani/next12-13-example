import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <div className="flex  flex-col items-center justify-center ">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Home </h1>
    </div>
  );
};

export default Home;
