"use client";
import { useState } from "react";

const ProductCard = () => {
  const [count, setCount] = useState<number>(0);
  const [maxCount, setMaxCount] = useState<number>(10);
  const [basePrice, setBasePrice] = useState<number>(19.99); // base price of the product

  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const totalPrice = count === 0 || count === 1 ? basePrice : count * basePrice;
  return (
    <div>
      <div className="group relative block overflow-hidden">
        <button className="absolute end-4 top-4 z-10 rounded-full bg-base-300 p-1.5">
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
          alt=""
          className="h-64 w-full object-cover sm:h-72"
        />

        <div className="relative bg-gradient-to-t from-base-100 to-base-300/50 border border-base-content/20 hover:border-base-content/40 transition p-6">
          <span className="whitespace-nowrap bg-base-300 px-3 py-1.5 text-xs font-medium">
            {" "}
            New{" "}
          </span>

          <h3 className="mt-4 text-lg font-medium ">Robot Toy</h3>

          <p className="mt-1.5 text-sm "> ${totalPrice.toFixed(2)}</p>

          <form className="mt-4 flex flex-row gap-3">
            <button
              type="button"
              className=" btn btn-wide bg-base-300  transition hover:scale-105"
            >
              Add to Cart
            </button>
            <div className="flex flex-row gap-2 items-center">
              <button type="button" onClick={decrement} className="btn">
                -
              </button>
              <span className="text-lg font-bold">{count}</span>
              <button type="button" onClick={increment} className="btn">
                +
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
