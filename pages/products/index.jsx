import Head from "next/head";
import React, { useState } from "react";
import Card from "../../components/Card";
import {
  useGetAllCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetSearchProductsQuery,
} from "../../services/ProductApi";

const ProductDefault = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const { data: searchData, isLoading } = useGetSearchProductsQuery(searchText);
  const { data: categories, isLoading: categoryLoading } =
    useGetAllCategoriesQuery();
  const { data: productsByCategory } = useGetProductsByCategoryQuery(category);
  if (isLoading) return "loading...";

  return (
    <>
      <Head>
        <title>Products showing here</title>
      </Head>
      <div>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="title  py-10">
              <h3 className="text-2xl font-bold">All Products</h3>
              <span className="block w-20 bg-lime-500 h-1"></span>
            </div>
            <div className="filter flex items-stretch">
              <div className="items-stretch flex">
                <input
                  type="search"
                  placeholder="Search by Name or Category..."
                  onChange={(event) => setSearchText(event.target.value)}
                  className="p-2 border border-gray-300 rounded outline-none"
                  value={searchText}
                />
                <button className="bg-sky-400 p-3 text-white">Search</button>
              </div>
              <div className="category">
                <select
                  name=""
                  id=""
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {categoryLoading && <option>loading.....</option>}
                  <option value="">select category</option>
                  {categories?.map((category, ind) => (
                    <option value={category} key={category + ind}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category
              ? productsByCategory?.products?.map((product) => (
                  <Card key={product?.id} product={product} />
                ))
              : searchData?.products?.map((product) => (
                  <Card key={product?.id} product={product} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDefault;
