import React from "react";
import { Image, Layout, Menu, Typography } from "antd";
import profile from "../../assets/profile.jpg";
import "./sidebar.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
const { Sider } = Layout;

const items = [
  { label: <Link to="/profile/about">About</Link>, key: "about" },
  { label: "Review", key: "review" },
  { label: "Media", key: "Media" },
  { label: "Blog", key: "blog" },
];

const Sidebar = () => {
  return (
    <Sider style={{ height: "100vh" }} width={250}>
      <div className="logo">
        <Link to="/"> Connect</Link>
      </div>
      <Image width={200} src={profile} />

      <div className="short-about">
        <div className="title">Zahid Hasan</div>
        <div className="work">
          <WorkIcon /> <span>Software Engineer</span>
        </div>

        <div className="location">
          <LocationOnIcon /> Dhaka
        </div>
      </div>

      <Menu mode="inline" items={items} />
    </Sider>
  );
};

export default Sidebar;
