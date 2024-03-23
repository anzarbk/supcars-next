import Image from "next/image";
import React from "react";
import hero from "../../../public/assets/heros/hero-2.png";

import Product from "../../app/types/Product";

const HomeCard = ({ product }: { product: Product }) => {
  // const { carName, model, description, rentPrice, salePrice, image } = product;
  return (
    <section>
      <div className="bg-white border border-gray-300 p-4 my-2 rounded-md shadow-md max-w-xs mx-auto">
        <div className="flex justify-center mt-4">
           <Image
          src={hero}
          alt="carName"
          width={250}
          height={200}
          className="object-cover mb-4 rounded-md"
        ></Image>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Porche</h3>
          <p className="text-sm text-gray-600 mb-2">model : 911</p>
          <p className="text-sm text-gray-600 mb-2">The Porsche 911 (pronounced Nine Eleven or in German: Neunelf) is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany.</p>
          <div className="flex justify-between gap-2">
          <div className="flex flex-col w-1/2">
            <p className="text-md font-bold text-blue-600 ">Rent: AED 1000/day</p>
            <button className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline">Rent</button>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-md font-bold text-green-600 ">Buy: AED 15000/only</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline">Buy</button>
          </div>
        </div>
        </div>
      </div>     
    </section>
  );
};

export default HomeCard;
