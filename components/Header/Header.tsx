import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <header className="bg-slate-400 text-2xl text-gray-600 w-full  sticky top-0 z-30 ">
      <nav>
        <ul className="flex justify-around items-center h-20  ">
          <li className="cursor-pointer hover:text-green-200 duration-75 transition-all">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer  hover:text-green-200 duration-75 transition-all">
            <a href="/products-csr">Products CSR</a>
          </li>
          <li className="cursor-pointer  hover:text-green-200 duration-75 transition-all">
            <a href="/products-ssr">Products SSR</a>
          </li>
          <li className="cursor-pointer  hover:text-green-200 duration-75 transition-all">
            <a href="/products-ssg">Products SSG</a>
          </li>
          <li className="cursor-pointer  hover:text-green-200 duration-75 transition-all">
            <a href="/products-isr">Products ISR</a>
          </li>
          <li className="cursor-pointer  hover:text-green-200 duration-75 transition-all">
            <a href="/products-next13">Products Next13</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
