import { Card, Row, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { Tabs } from "./../../Tabs/Tabs";
import { Awatar } from "./../../Awatar/Awatar";
import { PushpinOutlined } from "@ant-design/icons";
import "./Head.scss";

export const Head = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header
            title="My ATI"
            style={{
                position: "sticky",
                top: 0,
                zIndex: 20,
                width: "100%",
                marginBottom: 15,
                padding: 0,
                background: colorBgContainer,
            }}
        >
            <div className="Head-container">
                <div style={{ marginRight: 10 }}>
                    <Breadcrumbs />
                </div>
                <Card
                    size="small"
                    bodyStyle={{ padding: 5 }}
                    color={""}
                >
                    <PushpinOutlined style={{ margin: "0 5px" }} />
                    <Tabs />
                </Card>
                <Awatar />
            </div>
        </Header>
    );
};
