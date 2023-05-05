import React, { useContext } from "react";
import { ColorRing } from "react-loader-spinner";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location);

  if (loading) {
    return (
      <div className="mx-auto flex justify-center w-8/12">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
