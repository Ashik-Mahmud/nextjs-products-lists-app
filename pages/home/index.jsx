import Head from "next/head";
import React from "react";
const HomeDefault = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <div className="container mx-auto p-4">
          <h3 className="text-3xl">Home Page</h3>
        </div>
      </div>
    </>
  );
};
export default HomeDefault;
