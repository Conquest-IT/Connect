import React, { Children } from "react";
import Copyright from "../../components/footer/Copyright.component";
import Navbar from "../../components/navbar/navbar.component";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Copyright />
    </>
  );
};

export default ProfileLayout;
