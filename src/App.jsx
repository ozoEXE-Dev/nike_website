import React from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./index";
import { Nav } from "./components";
const App = () => (
  <main>
    <Nav />
    <Hero />
    <PopularProducts />
    <SuperQuality />
    <Services />
    <SpecialOffer />
    <CustomerReviews />
    <Subscribe />
    <Footer />
  </main>
);

export default App;
