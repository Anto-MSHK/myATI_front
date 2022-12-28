import { theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";

export const Head = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      title="My ATI"
      style={{ marginBottom: 15, padding: 0, background: colorBgContainer }}
    >
      <div style={{ margin: "16px 0 0 18px" }}>
        <Breadcrumbs />
      </div>
    </Header>
  );
};
