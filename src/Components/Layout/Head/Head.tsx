import { Card, Row, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { Tabs } from "./../../Tabs/Tabs";
import { Awatar } from "./../../Awatar/Awatar";
import { PushpinOutlined } from "@ant-design/icons";
import styles from "./Head.module.css";
import useScreenWidth from "src/Hooks/useScreenSize";
import TabsMobile from "src/Components/Tabs/TabsMobile";

export const Head = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const widthSize = useScreenWidth();
  const mobileWidth = 600;
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
      <div className={styles.container}>
        <div>
          <Breadcrumbs />
        </div>

        {widthSize > mobileWidth ? (
          <Card size="small" bodyStyle={{ padding: 5 }} color={""}>
            <PushpinOutlined style={{ margin: "0 5px" }} />
            <Tabs />
          </Card>
        ) : (
          <TabsMobile />
        )}

        {/* <Awatar /> */}
      </div>
    </Header>
  );
};
