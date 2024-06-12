export default function ProductId({ params } : {params : {productId : string }}) {
  return (
    <>
      <h1>the is product with {params.productId}</h1>
    </>
  );
}
