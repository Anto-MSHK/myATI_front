import React, { FC, useState } from "react";
import { TeamOutlined, GithubOutlined } from "@ant-design/icons";
import { Button, Collapse } from "antd";
import DevelopersList from "src/Components/DevelopersList/DevelopersList";
import styles from "./Banner.module.css";
import logo from "../../../icons/fulllogo.png";
import useScreenWidth from "src/Hooks/useScreenSize";

interface BannerI {
  collapsible?: boolean;
}
export const Banner: FC<BannerI> = ({ collapsible = true }) => {
  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 400;
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
      className={styles.banner}
    >
      <a
        href="https://github.com/Anto-MSHK/my_ati_admin"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "absolute", right: 15, top: 80, zIndex: 10 }}
      >
        <Button icon={<GithubOutlined />} type="primary">
          GitHub проекта
        </Button>
      </a>
      <img
        src={logo}
        style={{
          width: widthSize > cutWidth ? "75%" : "90%",
          height: "auto",
          margin:
            widthSize > cutWidth
              ? "-50px 0"
              : widthSize > mobileWidth
              ? "10px 0 -50px 0"
              : "10px 0 -50px 0",
          zIndex: 5,
          position: "relative",
        }}
        alt=""
      />
      {collapsible ? (
        <Collapse
          ghost
          onChange={() => {
            setIsCollapse((prev) => !prev);
          }}
        >
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
                  {!isCollapse ? "увидеть" : "скрыть"} разработчиков
                </h3>
              </p>
            }
            key="1"
            showArrow={false}
          >
            <DevelopersList />
          </Collapse.Panel>
        </Collapse>
      ) : (
        <div style={{ marginTop: widthSize > cutWidth ? -15 : 55 }}>
          <DevelopersList />
        </div>
      )}
    </div>
  );
};
