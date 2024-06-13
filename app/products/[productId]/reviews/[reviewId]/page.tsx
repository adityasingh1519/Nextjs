import { notFound } from "next/navigation";

import {Metadata} from 'next'

export const metadata : Metadata = {
    title: 'reviews'
}
export default function ReviewId({ params }: { params: { reviewId: string } }) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>this is product review page {params.reviewId}</h1>
    </>
  );
}
