"use client";
import { useRouter } from "next/navigation";

export default function PlaceOrder() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Place order Clicked");
    // router.push('/')
    router.replace("/");
    // router.forward()
  };
  return (
    <>
      <p className="p-3 font-bold  hover:text-red-400 bg-yellow-400 my-4">
        Click to place order
      </p>
      <button
        className="text-white-200 p-2 bg-blue-500 rounded hover:bg-white border border-blue-500 hover:text-black-700 hover:border-black hover:border"
        onClick={handleClick}
      >
        Place Order
      </button>
    </>
  );
}
