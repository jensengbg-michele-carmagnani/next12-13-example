import Link from 'next/link';
import React from 'react';
import { Product, Products } from '../../typing';
import ItemsList from './ItemsList';

type Props = {};

async function productsNext13({}: Props) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <main className="max-w-lg">
          <div className="">
            {/*@ts-ignore */}
            <ItemsList />
          </div>
        </main>
      </div>
    </div>
  );
}

export default productsNext13;
