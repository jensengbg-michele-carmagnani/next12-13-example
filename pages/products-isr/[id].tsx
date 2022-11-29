import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Header from '../../components/Header/Header';
import { Product } from '../../typing';

type Props = {
  product: Product;
};

const ProductISR = ({ product }: Props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <Header />
        <main className="max-w-lg">
          <div>
            <h1 className="text-xl font-bold py-5">{product?.title}</h1>
            <h2 className="capitalize text-gray-500 mb-4">
              {product?.category}
            </h2>
            <p className="">{product?.description}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductISR;

// Path: pages/products-ssg/[id].tsx
// Compare this snippet from pages/products-ssg/index.tsx:
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://dummyjson.com/products/`);
  const data = await res.json();
  const products: Product[] = data.products;
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: Product = await res.json();

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: product,
    },
    revalidate: 10,
  };
};
