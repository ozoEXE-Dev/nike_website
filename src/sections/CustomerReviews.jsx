import CustomerDetail from "../components/CustomerDetail";
import { reviews } from "../assets/constants";
const CustomerReviews = () => (
  <section className="text-center mt-10 max-container bg-[#F5F6FF] padding-x padding-y flex flex-col items-center justify-center gap-30">
    <div className="">
      <h2 className="font-palanquin text-4xl font-bold">
        What Our <span className="text-red">Customers</span> Say?
      </h2>
      <p className=" mt-5 text-slate-gray text-lg font-montserrat lg:max-w-[510px] lg:ml-4">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
    </div>
    <div className="flex flex-col gap-20 lg:flex-row">
        {reviews.map((review)=>(
            <CustomerDetail {...review}/>
        ))}
    </div>
  </section>
);

export default CustomerReviews;
