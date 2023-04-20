import {
  SmileOutlined,
  ArrowRightOutlined,
  TeamOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Collapse,
  Radio,
  Result,
  Statistic,
  Tag,
} from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import logo from "../../icons/fulllogo.png";
import styles from "./MainPage.module.css";
import DevelopersList from "src/Components/DevelopersList/DevelopersList";
export const MainPage = () => {
  const [scroll, setScroll] = useState(0);
  const scrollTo = () => {
    let element = document.getElementById("scroll");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
        className={styles.backgr}
      >
        <a
          href="https://github.com/Anto-MSHK/my_ati_admin"
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "absolute", right: 15, top: 80, zIndex: 20 }}
        >
          <Button icon={<GithubOutlined />} type="primary">
            GitHub проекта
          </Button>
        </a>
        <img
          src={logo}
          style={{
            width: 750,
            margin: "-50px 0",
            zIndex: 5,
            position: "relative",
          }}
        />
        <Collapse ghost>
          <Collapse.Panel
            style={{ textAlign: "center" }}
            header={
              <p
                style={{
                  margin: 0,
                  position: "relative",
                  zIndex: 10,
                }}
              >
                <TeamOutlined style={{ color: "#969696", fontSize: 25 }} />
                <h3
                  style={{ color: "#969696", marginBottom: 0, marginTop: -5 }}
                >
                  увидеть разработчиков
                </h3>
              </p>
            }
            key="1"
            showArrow={false}
          >
            <DevelopersList />
          </Collapse.Panel>
        </Collapse>
      </div>
      <div id={"scroll"} className={styles.content}>
        <Result
          className={styles.info}
          icon={<SmileOutlined />}
          style={{ height: "80vh" }}
          title="Привет, выбери режим"
          extra={
            <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
              <Card
                className={styles.theme}
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
                      backgroundColor: "#ebebeb",
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
                  style={{ padding: "10px 0" }}
                  title={<h1 style={{ fontWeight: 600 }}>Я студент</h1>}
                  description="выбери свой факультет"
                />
              </Card>
              <Card
                size="small"
                className={styles.theme}
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
                      backgroundColor: "#ebebeb",
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
                  style={{ padding: "10px 0" }}
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
    </div>
  );
};
