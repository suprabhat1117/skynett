import React from "react";
import Header from "../../componnents/Header";
import Banner from "../../componnents/Banner";
import Services from "../../componnents/Services";
import Contactusform from "../../componnents/Contactusform";

function Home(props) {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Contactusform />
    </>
  );
}

export default Home;
