import Head from "next/head";
import React from "react";
import Card from "../../components/Card";
import { useGetProductsQuery } from "../../services/ProductApi";
const ProductDefault = () => {
  const { data, isLoading } = useGetProductsQuery();
  if (isLoading) return "loading...";

  return (
    <>
      <Head>
        <title>Products showing here</title>
      </Head>
      <div>
        <div className="container mx-auto">
          <div className="title  py-10">
            <h3 className="text-2xl font-bold">All Products</h3>
            <span className="block w-20 bg-lime-500 h-1"></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.products?.map((product) => (
              <Card key={product?.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDefault;
