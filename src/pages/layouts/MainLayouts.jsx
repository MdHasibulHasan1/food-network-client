import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import { ColorRing } from "react-loader-spinner";

const MainLayouts = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  return (
    <div>
      <div>
        {navigation.state === "loading" && (
          <div className="mx-auto flex justify-center">
            <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
            />
          </div>
        )}
      </div>
      <Header></Header>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
