import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

// data structure
type Product = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

type Props = {};
function ProductPage({}: Props) {
  const [product, setProduct] = useState<Product>();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const fetcher = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data: Product = await res.json();
      setProduct(data);
    };
    fetcher();
  }, [id]);
  if (!product) return <div>loading...</div>;
  return (
    <div className="flex flex-col justify-center items-center ">
      <Header />
      <main>
        <h1>{product?.title}</h1>
        <h2>{product?.brand}</h2>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
      </main>
    </div>
  );
}

export default ProductPage;
