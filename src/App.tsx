import React, { useState } from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "./Components/Layout/Nav/Nav";
import { Router } from "./Components/Layout/Router/Router";
import { Breadcrumbs } from "./Components/Layout/Breadcrumbs/Breadcrumbs";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Nav />
        <Layout className="site-layout">
          <Header
            title="My ATI"
            style={{ padding: 0, background: colorBgContainer }}
          />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumbs />
            <Router />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
