import Link from "next/link";

export default function FunctionOne() {
  return (
    <>
      <h1>This is function One</h1>
      <Link className="text-blue-300 underline " href="/f1/f2">
        Go To F2
      </Link>
      <div>
        <Link className="text-blue-300 underline " href="/about">
          Go To About
        </Link>
      </div>
    </>
  );
}
