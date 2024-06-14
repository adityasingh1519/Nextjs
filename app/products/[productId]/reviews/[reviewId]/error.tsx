"use client"
export default function ErrorBoundries({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div>
        <h1 className="bg-yellow-400 text-red-500 p-3 my-4">
          {error.message}
          <button className="p-3 text-white rounded bg-blue-500" onClick={reset}> Try Again</button>
        </h1>
      </div>
    </>
  );
}
