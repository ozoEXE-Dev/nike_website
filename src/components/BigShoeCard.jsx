import { star } from "../assets/icons";
const BigShoeCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="rounded-4xl">
        <img src={imgURL} alt="shoe" className="" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
            <img src={star} alt="" width={23} height={20}/>
            <span className="text-slate-gray leading- font-montserrat text-xl">{"(4.5)"}</span>
        </div>
        <h3 className="text-2xl font-bold font-palanquin">{name}</h3>
        <span className="font-bold text-red text-2xl">{price}</span>
      </div>
    </div>
  );
};

export default BigShoeCard;
