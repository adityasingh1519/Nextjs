'use client'
import { notFound } from "next/navigation";

function getRandomInt(count : number) : number {
  return Math.floor(Math.random() * count );
}


export default function ReviewId({ params }: { params: { reviewId: string } }) {
  const random = getRandomInt(3);

  if(random === 1) {
    throw new Error('Loaing Review error');
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>this is product review page {params.reviewId}</h1>
    </>
  );
}
