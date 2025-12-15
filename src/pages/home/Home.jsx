import React from "react";
import Hero from "../../companents/hero/Hero";
import Catalog from "../../companents/catalog/Catalog";
import Information from "../../companents/information/Information";
import Service from "../../companents/service/Service";
import Arrow from "../../companents/arrow/Arrow";
import Filter from "../../companents/filter/Filter";
import Card from "../../companents/card/Card";
import Made from "../../companents/made/Made";
import Lube from "../../companents/lube/Lube";

const Home = () => {
  return (
    <div>
      <Hero />
      <Made />
      <Catalog />
      <Lube />
      <Service />
      <Information />
      <Card />
    </div>
  );
};

export default Home;
