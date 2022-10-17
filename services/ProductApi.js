import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ProductApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        getSearchProducts: builder.query({
            query: (q) => `/products/search?q=${q}`
        }),
        getAllCategories: builder.query({
            query: () => `/products/categories`
        }),
        getProductsByCategory: builder.query({
            query: (cate) => `/products/category/${cate}`
        })
    }),
});
export const { useGetProductsQuery, useGetProductQuery, useGetSearchProductsQuery, useGetAllCategoriesQuery, useGetProductsByCategoryQuery } = ProductApi;

