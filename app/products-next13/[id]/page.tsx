import React from 'react';
import { Product } from '../../../typing';

type Props = {
  params: {
    id: string;
  };
};

//explanation about fetch and make a parrallel with next12

// {cashe : "force-cache"} => SSG static site generation
// {cashe : "no-cache"} => SSR server side render static site generation every single item is re-fatched
// {next : {revalidate:10}} => ISR incremental static regeneration
const productsFetch = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 },
  });
  const data = res.json();
  return data;
};
const page = async ({ params }: Props) => {
  const { id } = params;
  const product: Product = await productsFetch(id);
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="bg-amber-200 rounded p-14">
        <p>{product.title}</p>
        <p>{product.category}</p>
        <p>{product.brand}</p>
        <p>{product.price} $</p>
      </div>
    </div>
  );
};

export default page;
