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
import { useAppSelector } from "src/State/hooks";

export const Head = () => {
  const items = useAppSelector((state) => state.pins);
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
        top: -1,
        zIndex: 20,
        width: "100%",
        marginBottom: widthSize > mobileWidth ? 15 : 0,
        padding: 0,
        background: colorBgContainer,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className={styles.container}>
        <div>
          <Breadcrumbs />
        </div>

        {widthSize > mobileWidth ? (
          <Card
            size="small"
            bodyStyle={{
              margin: "0 5px 0 5px",
              padding: "5px 0px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            color={""}
          >
            <PushpinOutlined style={{ margin: "0 5px" }} />
            {items.groups.length > 0 || items.teachers.length > 0 ? (
              <Tabs />
            ) : (
              <h4 style={{ fontWeight: 600 }}>нет закреплённых</h4>
            )}
          </Card>
        ) : (
          <TabsMobile />
        )}

        {/* <Awatar /> */}
      </div>
    </Header>
  );
};
