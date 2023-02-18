import React, { Fragment } from "react";
import Head from "../Head/Head";
import Baner from "../Baner/Baner";
import Footer from "../Footer/Footer";
import Footer2 from "../../footer2/Footer2";



const Home = () => {
  return (
    <div>
      <Fragment>
        <Head/>
        <Baner/>
        <Footer/>
        <Footer2/>
      </Fragment>
    </div>
  );
};

export default Home;
