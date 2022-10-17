import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto flex items-center justify-between py-7">
        <div className="logo">Logo</div>
        <ul className="flex items-center gap-8">
          <li
            className={`${
              router.pathname === "/" ||
              (router.pathname === "/home" && "bg-sky-100")
            } px-3`}
          >
            <Link href="/home">Home</Link>
          </li>
          <li
            className={`${
              router.pathname === "/products" && "bg-sky-100"
            } px-3`}
          >
            <Link href="/products">Product</Link>
          </li>
          <li
            className={`${router.pathname === "/contact" && "bg-sky-100"} px-3`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
