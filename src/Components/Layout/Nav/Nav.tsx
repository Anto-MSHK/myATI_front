import React, { useState } from "react";
import { Menu, Layout } from "antd";
import type { MenuProps } from "antd";
import {
  UnorderedListOutlined,
  PieChartOutlined,
  ApartmentOutlined,
  UserOutlined,
  SettingOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

export const Nav = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

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
      getItem(<Link to="/schedule/fvo">ФВО</Link>, "11"),
      getItem(<Link to="/schedule/spo">СПО</Link>, "12"),
    ]),
    getItem("Структура", "2", <ApartmentOutlined />, [
      getItem(<Link to="/edu/teacher">Преподаватели</Link>, "22"),
      getItem(<Link to="/edu/subjects">Предметы</Link>, "23"),
    ]),
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};
