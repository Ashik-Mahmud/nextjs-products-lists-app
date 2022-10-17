import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useGetProductQuery } from "../../services/ProductApi";

const ProductDetails = () => {
  const router = useRouter();
  const { product } = router.query;
  const { data, isLoading } = useGetProductQuery(Number(product));

  if (isLoading) return "loading....";

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div className="container mx-auto m-10 shadow p-10">
        <Link href="/products"> Back</Link>
        <div className="title  flex items-center justify-between">
          <h3 className="text-2xl font-bold my-6">{data?.title}</h3>
          <span>{data?.category}</span>
        </div>
        <Image
          src={data?.thumbnail}
          alt={data?.title}
          width={1700}
          className="mt-8 rounded object-contain"
          height={500}
        />
        <div className="info mt-8">
          <h3 className="text-xl font-bold">Description</h3>
          <p className="text-gray-500 mt-4">{data?.description}</p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="info mt-7">
            <h3 className="text-xl font-bold">Brand</h3>
            <p className="text-gray-500 mt-4">{data?.brand}</p>
          </div>
          <div className="info mt-8">
            <h3 className="text-xl font-bold">Price</h3>
            <p className="text-gray-500 mt-4">{data?.price} $</p>
          </div>
          <div className="info mt-8">
            <h3 className="text-xl font-bold">Stock</h3>
            <p className="text-gray-500 mt-4">{data?.stock}</p>
          </div>
          <div className="info mt-5">
            <h3 className="text-xl font-bold">Rating</h3>
            <p className="text-gray-500 mt-4">{data?.rating}</p>
          </div>
          <div className="info mt-5">
            <h3 className="text-xl font-bold">Discount %</h3>
            <p className="text-gray-500 mt-4">{data?.discountPercentage}</p>
          </div>
        </div>
        <div className="gallery">
          <h3 className="text-xl font-bold mt-8">Gallery</h3>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {data?.images?.map((image, ind) => (
              <Image
                src={image}
                alt={data?.title}
                width={300}
                height={250}
                className="rounded"
                key={image + ind}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
