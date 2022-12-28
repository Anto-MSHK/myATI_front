import { Card, Row, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { Tabs } from "./../../Tabs/Tabs";
import { Awatar } from "./../../Awatar/Awatar";
import { PushpinOutlined } from "@ant-design/icons";

export const Head = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      title="My ATI"
      style={{ marginBottom: 15, padding: 0, background: colorBgContainer }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <div style={{ marginRight: 10 }}>
          <Breadcrumbs />
        </div>
        <Card size="small" bodyStyle={{ padding: 5 }} color={""}>
          <PushpinOutlined style={{ margin: "0 5px" }} />
          <Tabs />
        </Card>
        <Awatar />
      </div>
    </Header>
  );
};
