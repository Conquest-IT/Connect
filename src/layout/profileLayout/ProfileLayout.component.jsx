import React from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "antd";
const { Content} = Layout;

import Navbar from "../../components/navbar/Navbar.component";
import Sidebar from "../../components/sidebar/Sidebar.component";

const ProfileLayout = () => {
  return (
    <Layout style={{height: "100vh"}}>
      <Sidebar />
      <Layout>
        <Navbar/>
        <Content>
          <Outlet/>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
};

export default ProfileLayout;
