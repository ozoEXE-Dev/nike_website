import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className=" mt-6 padding-y padding-x max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="max-lg:text-center text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-red"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[500px] sm:justify-between sm:pr-2 w-full sm:border sm:flex-row sm:border-slate-gray sm:rounded-full items-center flex max-lg:flex-col gap-4">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="max-sm:border-slate-gray max-sm:border max-sm:w-full max-lg:rounded-full p-5"
        />
        <div className="max-sm:w-full">
        <Button text="Sign Up" widthFull/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
