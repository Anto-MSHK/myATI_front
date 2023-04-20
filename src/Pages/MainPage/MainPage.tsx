import { SmileOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Radio, Result, Statistic, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import logo from "../../icons/logo.svg";
import styles from "./MainPage.module.css";
export const MainPage = () => {
  const plainOptions = ["Apple", "Pear", "Orange"];
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className={styles.backgr}
      >
        <img src={logo} style={{ width: 200 }} />
      </div>
      <Result
        className={styles.info}
        icon={<SmileOutlined />}
        style={{ height: "100vh" }}
        title="Привет, давай начнём!"
        extra={
          <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
            <Card
              size="small"
              style={{ width: 500, overflow: "hidden" }}
              cover={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    overflow: "hidden",
                    padding: 10,
                    gap: 10,
                    backgroundColor: "#cfcfcf",
                  }}
                >
                  <Card size="small">
                    <Statistic
                      title="Факультет высшего образования"
                      value={"ВО"}
                      //   precision={2}
                      valueStyle={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#1677FF",
                      }}
                      //   prefix={<ArrowUpOutlined />}
                    />
                  </Card>
                  <Card size="small">
                    <Statistic
                      title="Факультет среднего образования"
                      value={"СПО"}
                      //   precision={2}
                      valueStyle={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#1677FF",
                      }}
                      //   prefix={<ArrowUpOutlined />}
                    />
                  </Card>
                </div>
              }
              actions={[]}
            >
              <Meta
                title={<h1 style={{ fontWeight: 600 }}>Я студент</h1>}
                description="Выбери свой факультет"
              />
            </Card>
            <Card
              size="small"
              style={{ width: 500, overflow: "hidden" }}
              cover={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    overflow: "hidden",
                    padding: 10,
                    gap: 10,
                    backgroundColor: "#cfcfcf",
                  }}
                >
                  <Card style={{ width: "100%" }}>
                    <Statistic
                      title="Преподаватели ТИ ДГТУ"
                      value={"Открыть список"}
                      //   precision={2}
                      valueStyle={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#1677FF",
                      }}
                      suffix={<ArrowRightOutlined />}
                    />
                  </Card>
                </div>
              }
              actions={[]}
            >
              <Meta
                title={<h1 style={{ fontWeight: 600 }}>Я преподаватель</h1>}
                description={
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Tag>beta</Tag>
                    <p style={{ margin: 0 }}>на стадии тестирования</p>
                  </div>
                }
              />
            </Card>
          </div>
        }
      />
    </div>
  );
};
