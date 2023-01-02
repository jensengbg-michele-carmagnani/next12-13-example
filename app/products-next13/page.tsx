import Link from 'next/link';
import React from 'react';
import ItemsList from './ItemsList';

type Props = {};

async function productsNext13({}: Props) {
  return (
    <main className="w-full max-w-lg mx-auto">
      <div className="">
        {/*@ts-ignore */}
        <ItemsList />
      </div>
    </main>
  );
}

export default productsNext13;
