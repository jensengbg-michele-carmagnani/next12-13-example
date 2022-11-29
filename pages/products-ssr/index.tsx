import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header/Header';
import { Product } from '../../typing';

type Props = {};

function ProductsPage({}: Props) {
  return (
    <div>
      {' '}
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20 flex flex-col justify-center items-center space-y-5">
        <h1 className="bg-red-900/40 p-4 font-bold">SERVER SIDE RENDER</h1>
        <button className="border-white bg-green-300 rounded p-2 hover:border hover:bg-green-600">
          <a href="/products-ssr/1">Product 1 Server Side Render</a>
        </button>
      </main>
    </div>
  );
}
export default ProductsPage;
