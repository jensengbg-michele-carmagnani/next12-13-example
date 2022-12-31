import { notFound } from 'next/navigation';
import React from 'react';
import { Product, Products } from '../../../typing';

type Props = {
  params: {
    id: string;
  };
};

//explanation about fetch and make a parallel with next12

// {cache : "force-cache"} => SSG static site generation
// {cache : "no-cache"} => SSR server side render every single request id  re-fetched
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

const getProducts = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  console.log(data);
  const products: Product[] = data.products;
  return products;
};
export async function generateStaticParams() {
  const products: Product[] = await getProducts();
  return products.map((product) => ({
    id: String(product.id),
  }));
}
