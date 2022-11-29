import Link from 'next/link';
import React from 'react';
import { Product, Products } from '../../typing';

type Props = {};
const getAllProducts = async () => {
  const res = await fetch('https://dummyjson.com/products', {});
  const data = await res.json();
  const products: Product[] = data.products;
  return products;
};
async function productsNext13({}: Props) {
  const products = await getAllProducts();
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <main className="max-w-lg">
          <div className="">
            {products.map((product) => (
              <Link href={`/products-next13/${product.id}`}>
                <div
                  className="bg-green-300 border my-2 py-5 rounded cursor-pointer hover:bg-green-500 duration-75 transition-all"
                  key={product.id}
                >
                  <h1 className="text-xl text-center font-bold  ">
                    {product?.title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default productsNext13;

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  const products: Product[] = data.products;

  return products.map((book) => ({ BookId: book.id?.toString() }));
}
