import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../../components/Header/Header';
import { Product, Products } from '../../typing';

type Props = {
  paths: string[];
  products: Product[];
};

const ProductsSSG = ({ paths, products }: Props) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20 flex flex-col mx-auto justify-center items-center space-y-5 max-w-lg">
        <h1 className="bg-red-500/40 p-4 font-bold">SERVER SITE GENERATION</h1>
        {products.map((product) => (
          <Link className="w-full" href={`/products-isr/${product.id}`}>
            <div
              className="bg-green-300  border my-2 py-5 rounded cursor-pointer hover:bg-green-500 duration-75 transition-all"
              key={product.id}
            >
              <h1 className="text-xl text-center font-bold w-full ">
                {product?.title}
              </h1>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default ProductsSSG;
//  it would be call every time when we visit the page
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch(`https://dummyjson.com/products/`);
//   const data = await res.json();
//   const products: Product[] = data.products;
//   return {
//     props: {
//       products,
//     },
//   };
// };

// it would be call only once when we build the app and cache the data
//you can refetch data using revalidate
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(`https://dummyjson.com/products/`);
  const data = await res.json();
  const products: Product[] = data.products;
  console.log('revalidate');
  if (!products) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
