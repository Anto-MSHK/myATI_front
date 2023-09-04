import React, { useEffect, useState } from "react";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { Breadcrumb, Layout, Menu, notification, theme } from "antd";
import { BrowserRouter, useParams } from "react-router-dom";
import { Nav } from "./Components/Layout/Nav/Nav";
import { Router } from "./Components/Layout/Router/Router";
import { Breadcrumbs } from "./Components/Layout/Breadcrumbs/Breadcrumbs";
import { Head } from "./Components/Layout/Head/Head";
import { useAppDispatch, useAppSelector } from "./State/hooks";
import {
  getWeek,
  setCurDayAndWeek,
} from "./State/Slices/scheduleSettingsSlice";
import { TopDot } from "./Components/TopDot/TopDot";
import useScreenWidth from "./Hooks/useScreenSize";
import { FireTwoTone } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurDayAndWeek());
  }, []);

  const widthSize = useScreenWidth();
  const mobileWidth = 600;

  const [api, contextHolder] = notification.useNotification();
  const { token } = theme.useToken();
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Мы рады обратной связи!`,
      description: (
        <p style={{ margin: 0 }}>
          Нравится сайт? Или знаешь как сделать лучше? Вступай в IT клуб нашего
          института и участвуй в проектах и конкурсах вместе с нами! По любым
          вопросам{" "}
          <a
            href={"https://vk.com/antomshk"}
            target="_blank"
            rel="noopener noreferrer"
          >
            пиши сюда
          </a>
          !
        </p>
      ),
      placement,
      icon: <FireTwoTone />,
    });
  };

  useEffect(() => {
    openNotification("bottomRight");
  }, []);

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        {contextHolder}
        <Nav />
        <Layout className="site-layout">
          <Head />
          <Content style={{ margin: widthSize > mobileWidth ? "0 16px" : "0" }}>
            <Router />
          </Content>
          <Footer style={{ textAlign: "center" }}>©TI DSTU, 2023</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
