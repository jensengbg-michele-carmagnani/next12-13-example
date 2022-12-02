import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { Product } from '../../typing';

type Props = {};

const getAllProducts = async () => {
  const res = await fetch('https://dummyjson.com/products', {
    cache: 'no-cache',
  });
  const data = await res.json();
  const products: Product[] = data.products;
  return products;
};
const ItemList = async (props: Props) => {
  const products = await getAllProducts();
  if (!products) return notFound();
  return (
    <div className="overflow-y-scroll">
      {products.map((product) => (
        <Link href={`/products-next13/${product.id}`}>
          <div
            className="bg-gray-100 border border-green-400 my-2 py-5 rounded cursor-pointer hover:bg-gray-400/50 duration-75 transition-all"
            key={product.id}
          >
            <h1 className="text-xl text-center font-bold  ">
              {product?.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
