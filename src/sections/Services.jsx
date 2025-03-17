import { services } from "../assets/constants";
import { ServiceCard } from "../components";
const Services = () => (
  <section className="mt-20 max-container padding-x flex flex-wrap gap-6">
    {services.map((service) => (
      <ServiceCard {...service} />
    ))}
  </section>
);

export default Services;
