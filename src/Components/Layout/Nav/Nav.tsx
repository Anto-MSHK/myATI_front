import React, { useState } from "react";
import { Menu, Layout, Image } from "antd";
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
import logo from "./adaptive-icon.png";
import styles from "./Nav.module.css";
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
            getItem(<Link to="/groups/fvo">ФВО</Link>, "11"),
            getItem(<Link to="/groups/spo">СПО</Link>, "12"),
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
            // breakpoint="lg"
            // collapsedWidth="0"
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                top: 0,
                left: 0,
            }}
        >
            <div className={styles.container}>
                <img
                    src={logo}
                    alt={"logo"}
                />
                <h1>
                    My ATI
                </h1>
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
            />
        </Sider>
    );
};
