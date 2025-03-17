import { Button } from "../components";
import { offer } from "../assets/images";
const SpecialOffer = () => (
  <section className=" max-container items-center  xl:flex-row-reverse flex padding-x mt-24 flex-col gap-10">
    <div className=" flex-1 flex-col flex gap-7">
      <h2 className="font-palanquin font-bold text-4xl">
        <span className="text-red"> Special</span> Offer
      </h2>
      <p className="text-slate-gray text-lg font-montserrat">
        Embark on a shopping journey that redefines your experience with
        unbeatable deals. From premier selections to incredible savings, we
        offer unparalleled value that sets us apart.
      </p>
      <p className="text-slate-gray text-lg font-montserrat mt-2 mb-2">
        Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional.
      </p>
      <div className="flex gap-4 flex-wrap">
        <Button text={"Shop now"} />
        <Button text={"Learn more"} transparent={true} />
      </div>
    </div>
    <div className="flex-1">
      <img src={offer} alt="" className=""/>
    </div>
  </section>
);

export default SpecialOffer;
