import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon, UpCircleOutlined } from "antd";
import "./Sections/Navbar.css";
import styled from "styled-components";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <a href="/">CakeCake</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <RightMenu mode="horizontal" />
        </div>

        <div className="menu__mobile-button" onClick={showDrawer}></div>
        {/* <SideBar> */}
        <SideBar
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </SideBar>
        {/* </SideBar> */}
      </div>
    </nav>
  );
}

const SideBar = styled(Drawer)`
  color: #000000;
  .ant-drawer-content {
    background-color: #000000;
  }
  .ant-drawer-body {
    background-color: #000000;
  }
`;

export default NavBar;
