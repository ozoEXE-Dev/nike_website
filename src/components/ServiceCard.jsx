const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" w-full flex-1 sm:min-w-[350px] shadow-3xl bg-white flex flex-col gap-6 rounded-3xl py-14 px-10 ">
        <div className=" rounded-full flex justify-center bg-red w-11 h-11">
            <img src={imgURL} alt="" />
        </div>
      <h3 className="text-3xl font-bold font-palanquin"> {label}</h3>
      <p className=" text-lg text-slate-gray font-montserrat">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
