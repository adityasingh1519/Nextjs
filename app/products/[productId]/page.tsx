import { Metadata } from "next";

//Dynamic metadata 
type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `product ${params.productId}`,
//     description: `this is descripption of product with product Id ${params.productId}`
//   };
// };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(()=>{
      resolve(`iphone ${params.productId}`)
    }, 100 )
  })
  return {
    title: `product ${title}`,
  };
};
 
export default function ProductId({ params } : Props) {
  return (
    <>
      <h1>the is product with {params.productId}</h1>
    </>
  );
}