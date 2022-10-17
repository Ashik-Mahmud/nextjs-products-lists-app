import Image from "next/image";
import Link from "next/link";
import React from "react";
const Card = ({ product }) => {
  return (
    <div className="shadow p-5 rounded cursor-pointer">
      <Image
        src={product?.thumbnail}
        alt={product?.title}
        width={500}
        height={250}
        className="rounded object-cover"
      />
      <div className="title">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{product?.title}</h3>
          <span className="bg-gray-200 p-1 rounded-md text-xs">
            {product?.brand}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-green-500">{product?.price} $</span>
          <span className="text-xs text-sky-400">
            {product?.stock > 0 && product?.stock + " Available"}
          </span>
        </div>
      </div>
      <div className="info">
        <span className="category">{product?.category}</span>
        <p className="text-sm text-gray-500">
          {product?.description.length > 50
            ? product?.description.slice(0, 50) + "..."
            : product?.description}
        </p>
        <Link href={`/products/${product?.id}`}>
          <span className="p-2 rounded bg-sky-100 mt-4 px-4 flex items-center justify-between">
            {" "}
            View Details
            <span title="Best Ratings">{product?.rating > 4 && "🌟"}</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
