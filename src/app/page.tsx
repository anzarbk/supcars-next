"use client"


import HomeCard from "@/components/cards/HomeCard";
import Hero from "@/components/layout/Hero";
import Link from "next/link";


export default function Home() {
  const product = {
    image: "string",
    carName: "string",
    model: "string",
    description: "string",
    rentPrice: 1000,
    salePrice: 11000,
  }
  return (
    <>
      <div className="p-4">
      <div>
      <Hero />
      </div>
      <div className="flex font-semibold p-10 justify-center" >
        <h2 className="text-5xl">Checkout our latest machines</h2>
        </div>
        {/* <Login />
        <Register /> */}
        <div  className="grid grid-cols-3  grid-rows-3">
      < HomeCard product={product} />
      < HomeCard product={product} />
      < HomeCard product={product} />
      < HomeCard product={product} />
      < HomeCard product={product} />
      < HomeCard product={product} />
      < HomeCard product={product} />
      < HomeCard product={product} />
      < HomeCard product={product} />
        </div>
      </div>
      <div className="flex font-semibold p-10 justify-center" >
        <Link href="/" className="text-5xl">More..</Link>
      </div>
      <hr />
    </>
    
  );
}
