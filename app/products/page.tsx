import Link from "next/link"



export default function Products() {
    const productId = 11 ;
    return <>
    
         <Link className="text-blue-500 font-semibold" href='/'>Back to Home</Link>
         <h1 className="text-green-600 font-bold ">This is Products listing </h1>    
         <div>
            <ul className="list-disc">
                <li><Link className="text-blue-400 underline" href='/products/1'> Products 1</Link></li>
                <li><Link className="text-blue-400 underline" href='/products/2'> Products 2</Link></li>
                <li><Link className="text-blue-400 underline" href='/products/3'> Products 3</Link></li>
                <li><Link className="text-blue-400 underline" href='/products/`${productId}`' replace > Products {productId}</Link></li>

                {/* replace property removes the url elemenation the back history  */}

            </ul>
         </div>
    </>
}