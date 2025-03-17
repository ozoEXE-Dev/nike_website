import React from "react";
const ShoeCard = ({ shoe, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = ()=>{
        if (shoe.bigShoe !== bigShoeImage) changeBigShoeImage(shoe.bigShoe)
    }
  return (
    <div className={`xl:h-[160px] xl:w-[165px] flex-1 border-2 ${shoe.bigShoe === bigShoeImage? "border-red" : "border-transparent"}  flex justify-center rounded-2xl overflow-hidden basis-[120px]`}>
      <div className=" flex-1 flex bg-cover bg-center bg-card p-2">
        <img
            onClick={handleClick}
          className="object-contain"
          src={shoe.thumbnail}
          alt="thumbnail"
          width={127}
          height={103.34}
        />
      </div>

    </div>
  );
};

export default ShoeCard;
