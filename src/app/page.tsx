import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-rose-600 font-bold uppercase">welcome Home</h1>
      <ul className="list-disc py-4">
        <li><Link className="text-blue-300 underline " href="/products"> Products</Link></li>
        <li><Link className="text-blue-300 underline " href="/order-place"> Order-place</Link></li>
        <li><Link className="text-blue-300 underline " href="/login"> Login</Link></li>
        <li><Link className="text-blue-300 underline " href="/complex-dashboard"> Complex Dashboard</Link></li>
        <li><Link className="text-blue-300 underline " href="/f1"> Function One</Link></li>
      </ul>
    </>
  );
}
