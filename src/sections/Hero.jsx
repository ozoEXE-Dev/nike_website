import { useState } from "react";
import { bigShoe1 } from "../assets/images";
import { ShoeCard, Button } from "../components";
import { shoes,statistics} from "../assets/constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const changeBigShoeImg = (img) => {
    setBigShoeImg(img);
  };

  return (
    <section className=" max-container flex flex-col xl:flex-row xl:min-h-screen">
      <div className=" wide:mt-[160px] pt-30 z-10 xl:max-w-[590px] flex flex-col gap-10 padding-l">
        <div className="text-red font-montserrat text-xl pt">
          Our Summer Collections
        </div>
        <div className="flex flex-col gap-6 max-sm:max-w-[450px] shrink-1">
          <h1 className="sm:leading-30 sm:text-[95px] font-palanquin font-black text-[75px] leading-22">
            <span className=" xl:bg-white xl:whitespace-nowrap pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-red">Nike</span> Shoes
          </h1>
          <p className="text-slate-gray text-xl lg:max-w-[500px]">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
        </div>
        <div><Button text={"Shop now"}/></div>
        <div className="flex justify-between max-w-[450px] max-sm:flex-wrap gap-4">
          {statistics.map((item) => (
            <div className="flex flex-col">
              <div className="text-4xl font-palanquin font-extrabold">
                {item.value}
              </div>
              <div className="text-slate-gray text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className=" max-vs:pt-0 justify-center max-vs:justify-start max items-center relative max-xl:pt-40 max-xl:mt-16 flex-col w-full bg-cover bg-center bg-hero flex xl:justify-center xl:items-end">
        <div className="max-w-[600px] xl:mt-34">
          <img
            src={bigShoeImg}
            alt=""
            className=" object-contain"
            width={600}
            height={500}
          />
        </div>
        <div className=" wide:absolute wide:top-[1500px] wide:left-[50px] xl:self-start relative top-15 flex gap-6 ">
          {shoes.map((shoe) => {
            return (
              <ShoeCard
                key={shoe.thumbnail}
                shoe={shoe}
                changeBigShoeImage={changeBigShoeImg}
                bigShoeImage={bigShoeImg}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
