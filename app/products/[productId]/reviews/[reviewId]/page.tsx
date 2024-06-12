import { notFound } from "next/navigation";

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
