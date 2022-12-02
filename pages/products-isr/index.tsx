import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header/Header';
import { Product } from '../../typing';
type Path = {
  params: {
    id: string;
  };
};
type Props = { paths: string[]; products: Product[] };

const ProductsISR = ({ paths, products }: Props) => {
  return (
    <div>
      <Head>
        <title>Incremental Static Regeneration Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20 flex flex-col justify-center items-center space-y-4">
        <h1 className="bg-violet-500/40 p-4 font-bold">
          INCREMENTAL STATIC RENDER
        </h1>
        <button className="border-white bg-green-300 rounded p-2 hover:border hover:bg-green-600">
          <a href="/products-isr/1">
            Product1 Incremental static regeneration{' '}
          </a>
        </button>
      </main>
    </div>
  );
};

export default ProductsISR;
