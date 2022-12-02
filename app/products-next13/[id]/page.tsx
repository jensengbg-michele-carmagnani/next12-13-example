import { notFound } from 'next/navigation';
import React from 'react';
import { Product, Products } from '../../../typing';

type Props = {
  params: {
    id: string;
  };
};

//explanation about fetch and make a parrallel with next12

// {cashe : "force-cache"} => SSG static site generation
// {cashe : "no-cache"} => SSR server side render static site generation every single item is re-fatched
// {next : {revalidate:10}} => ISR incremental static regeneration
const getProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 },
  });
  const product: Product = await res.json();
  console.log('FETCHING NEW DATA', product);
  return product;
};

const ProductPage = async ({ params: { id } }: Props) => {
  const product: Product = await getProduct(id);
  if (!product.id) return notFound();
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="bg-green-200/20 border-green-500 border rounded p-14">
        <p>{product.title}</p>
        <p>{product.category}</p>
        <p>{product.brand}</p>
        <p>{product.price} $</p>
      </div>
    </div>
  );
};

export default ProductPage;


