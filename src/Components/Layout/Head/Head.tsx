import { Card, Row, Tooltip, theme } from "antd";
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
import pin from "../../../icons/pin_disactive.png";
export const Head = () => {
  const items = useAppSelector((state) => state.pins);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const widthSize = useScreenWidth();
  const mobileWidth = 600;
  return (
    <Header
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
      <div
        className={styles.container}
        style={{
          justifyContent: widthSize < mobileWidth ? "flex-end" : undefined,
          marginRight: widthSize < mobileWidth ? undefined : 25,
        }}
      >
        {widthSize > mobileWidth && (
          <div>
            <Breadcrumbs />
          </div>
        )}

        {widthSize > mobileWidth ? (
          <Tooltip
            placement="bottomRight"
            title={
              items.groups.length === 0 &&
              items.teachers.length === 0 && (
                <div>
                  Нажми на соответствующий значок возле группы или преподавателя
                </div>
              )
            }
          >
            <Card
              size="small"
              bodyStyle={{
                cursor: "pointer",
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
          </Tooltip>
        ) : (
          <TabsMobile />
        )}

        {/* <Awatar /> */}
      </div>
    </Header>
  );
};
