import { GetServerSideProps } from 'next';
import React from 'react';
import Header from '../../components/Header/Header';
import { Product } from '../../typing';

type Props = {
  product: Product;
};

const ProductSSR: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <Header />
        <main className="max-w-lg">
          <div>
            <h1 className="text-xl font-bold py-5">{product?.title}</h1>
            <h2 className="capitalize text-gray-500 mb-4">
              {product.category}
            </h2>
            <p className="">{product?.description}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductSSR;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const id = context.params?.id;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: Product = await res.json();
  return {
    props: {
      product,
    },
  };
};
