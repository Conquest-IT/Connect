import React from "react";
import { Layout, Menu } from "antd";
const { Header} = Layout;
import "./navbar.scss";

const items = [
  { label: "Feed", key: "feed" },
  { label: "Notification", key: "notification" },
  { label: "Message", key: "message" },
  { label: "Profile", key: "profile" },
];

export default function Navbar() {
  return (
    <Header>
      <Menu
        // theme="light"
        mode="horizontal"
        items={items}
      />
    </Header>
  );
}
