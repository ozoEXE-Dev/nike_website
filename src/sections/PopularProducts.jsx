import React from "react";
import { BigShoeCard } from "../components";
import { products } from "../assets/constants";

const PopularProducts = () => (
  <section id="products" className="max-container padding-x mt-30">
    <div className="flex flex-col gap-7">
      <h2 className="font-palanquin text-4xl font-bold">
        Our <span className="text-red"> Popular</span> Products
      </h2>
      <p className="text-slate-gray font-montserrat sm:min-w-[400px] sm:max-w-[490px]">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
    </div>
    <div className="gap-12 mt-16 grid grid-cols-[300px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product,index)=>(<BigShoeCard key={index} {...product}/>))}
    </div>
  </section>
);

export default PopularProducts;
