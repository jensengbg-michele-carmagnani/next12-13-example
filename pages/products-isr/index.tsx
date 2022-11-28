import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header/Header';
import { Product } from '../../typing';

type Props = { paths: string[] };

const ProductsISR = ({ paths }: Props) => {
  return (
    <div>
      <Head>
        <title>Incremental Static Regeneration Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20 flex flex-col justify-center items-center">
        <h1>SERVER SIDE RENDER</h1>
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
