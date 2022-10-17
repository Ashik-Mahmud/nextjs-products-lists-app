import Link from "next/link";
import React from "react";
const NotFoundPage = () => {
  return (
    <div className="grid h-screen place-items-center text-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold my-3">404</h1>
        <h3 className="text-3xl">Page Not Found.</h3>
        <Link href="/">
          <a className="bg-sky-400 p-3 rounded my-5 inline-block cursor-pointer">
            Go to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
