import React, { useState } from "react";
import { Menu, Layout, Image, Button } from "antd";
import type { MenuProps } from "antd";
import {
  UnorderedListOutlined,
  PieChartOutlined,
  ApartmentOutlined,
  UserOutlined,
  SettingOutlined,
  ExperimentOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "./adaptive-icon.png";
import styles from "./Nav.module.css";
import useScreenWidth from "src/Hooks/useScreenSize";
type MenuItem = Required<MenuProps>["items"][number];
export const Nav = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);

  const widthSize = useScreenWidth();
  const mobileWidth = 600;

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Расписание", "1", <UnorderedListOutlined />, [
      //!!!
      getItem(
        <Link
          to="/groups/fvo"
          onClick={() => {
            if (widthSize < mobileWidth) {
              setCollapsed((prev) => !prev);
              document.body.style.overflow = "auto";
            }
          }}
        >
          ФВО
        </Link>,
        "11"
      ),
      getItem(
        <Link
          to="/groups/spo"
          onClick={() => {
            if (widthSize < mobileWidth) {
              setCollapsed((prev) => !prev);
              document.body.style.overflow = "auto";
            }
          }}
        >
          СПО
        </Link>,
        "12"
      ),
    ]),
    getItem("Структура", "2", <ApartmentOutlined />, [
      getItem(
        <Link
          to="/edu/teacher"
          onClick={() => {
            if (widthSize < mobileWidth) {
              setCollapsed((prev) => !prev);
              document.body.style.overflow = "auto";
            }
          }}
        >
          Преподаватели
        </Link>,
        "22"
      ),
      getItem(
        <Link
          to="/edu/subjects"
          onClick={() => {
            if (widthSize < mobileWidth) {
              setCollapsed((prev) => !prev);
              document.body.style.overflow = "auto";
            }
          }}
        >
          Предметы
        </Link>,
        "23"
      ),
    ]),
  ];
  return (
    <div style={{}}>
      {widthSize < mobileWidth && (
        <Button
          shape="circle"
          style={{
            position: "fixed",
            zIndex: 130,
            top: 15,
            left: 15,
            height: 35,
            width: 35,
          }}
          onClick={() => {
            setCollapsed((prev) => !prev);
            if (collapsed) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "auto";
          }}
        >
          {collapsed ? <MenuOutlined /> : <CloseOutlined />}
        </Button>
      )}
      <Sider
        collapsible
        // reverseArrow
        collapsed={collapsed}
        onCollapse={(value) => {
          if (widthSize > mobileWidth) setCollapsed(value);
          else setCollapsed(true);
        }}
        breakpoint="xxl"
        collapsedWidth={widthSize < mobileWidth ? "0px" : undefined}
        //   reverseArrow
        style={{
          //  overflow: "auto",
          height: "100vh",
          position: widthSize < mobileWidth ? "fixed" : "sticky",
          top: 0,
          left: 0,
          margin: 0,
          overflow: "hidden",
          zIndex: 100,
        }}
      >
        <div
          className={`${styles.container} ${
            widthSize < mobileWidth ? styles.mobile : ""
          }`}
        >
          <h1>My ATI</h1>
          <img src={logo} alt={"logo"} />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      {widthSize < mobileWidth && !collapsed && (
        <div
          style={{
            background: "rgba(255,255,255,0.5)",
            width: "100%",
            height: "100vh",
            zIndex: 50,
            position: "fixed",
          }}
          onClick={() => {
            setCollapsed((prev) => !prev);
            if (collapsed) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "auto";
          }}
        />
      )}
    </div>
  );
};
