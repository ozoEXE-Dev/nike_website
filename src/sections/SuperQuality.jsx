import { Button } from "../components";
import { shoe8 } from "../assets/images";
const SuperQuality = () => (
  <section className="  max-container sm:items-center justify-between flex gap-12 flex-col lg:flex-row mt-64 padding-x">
    <div className="flex flex-1 flex-col gap-7 lg:max-w-[565px] sm:min-w-[440px]">
      <h2 className="font-palanquin font-bold text-4xl ">
        We Provide You <span className="text-red">Super Quality</span> Shoes
      </h2>
      <p className="font-montserrat text-lg text-slate-gray">
        Ensuring premium comfort and style, our meticulously crafted footwear is
        designed to elevate your experience, providing you with unmatched
        quality, innovation, and a touch of elegance.
      </p>
      <p className="font-montserrat text-lg text-slate-gray">
        Our dedication to detail and excellence ensures your satisfaction
      </p>
      <div>
        <Button text={"View details"} />
      </div>
    </div>
    <div className="sm:min-w-[375px] flex-1">
      <img src={shoe8} alt="" />
    </div>
  </section>
);

export default SuperQuality;
