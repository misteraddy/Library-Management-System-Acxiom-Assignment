import React from "react";
import { useLocation } from "react-router-dom";
import AdminContainer from "../Admin/AdminContainer";
import UserContainer from "../User/UserContainer";

function HomeContainer() {
  const location = useLocation();
  const { email, password } = location.state || {};

  if (email === "adm" && password === "adm") {
    return <AdminContainer />;
  } else if (email === "user" && password === "user") {
    return <UserContainer />;
  } else {
    return (
      <div className="text-center mt-20 text-red-600 text-xl">
        Invalid credentials. Please go back and try again.
      </div>
    );
  }
}

export default HomeContainer;
