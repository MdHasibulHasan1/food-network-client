import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Spinner from "../../components/Spinner";

const MainLayouts = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  return (
    <div>
      <div>{navigation.state === "loading" && <Spinner />}</div>

      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
