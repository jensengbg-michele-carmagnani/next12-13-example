import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header/Header';

type Props = {};

function ProductsPage({}: Props) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20 flex flex-col justify-center items-center">
        <h1>SERVER SIDE RENDER</h1>
        <button className="border-white bg-green-300 rounded p-2 hover:border hover:bg-green-600">
          <a href="/products-csr/1">Products CSR</a>
        </button>
      </main>
    </div>
  );
}
export default ProductsPage;
