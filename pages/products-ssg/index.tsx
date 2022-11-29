import { GetStaticPaths } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header/Header';
import { Product } from '../../typing';

type Props = {
  paths: string[];
};

const ProductsSSG = ({ paths }: Props) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20 flex flex-col justify-center items-center space-y-5">
        <h1 className="bg-red-500/40 p-4 font-bold">SERVER SITE GENERATION</h1>

        <button className="border-white bg-green-300 rounded p-2 hover:border hover:bg-green-600">
          <a href="/products-ssg/1">Product1 Server Side Render</a>
        </button>
      </main>
    </div>
  );
};

export default ProductsSSG;
