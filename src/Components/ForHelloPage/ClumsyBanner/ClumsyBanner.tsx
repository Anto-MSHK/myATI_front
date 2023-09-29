import React, { FC, useState } from "react";
import { TeamOutlined, GithubOutlined } from "@ant-design/icons";
import { Button, Collapse } from "antd";
import DevelopersList from "src/Components/DevelopersList/DevelopersList";
import styles from "./ClumsyBanner.module.css";
import logo from "../../../icons/atidstu_logo.gif";
import useScreenWidth from "src/Hooks/useScreenSize";
import { MTBanner } from "../MTBanner/MTBanner";

interface BannerI {
  collapsible?: boolean;
}
export const ClumsyBanner: FC<BannerI> = ({ collapsible = true }) => {
  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 450;
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        //   height: "100%",
        position: "relative",
      }}
      className={styles.banner}
    >
      <MTBanner style={{ position: "absolute", top: 0, right: 20 }} />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 80,
          left: 0,
          zIndex: 10,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <Button
          icon={<GithubOutlined />}
          type="primary"
          style={{
            backgroundColor: "black",
            border: "1.5px solid #A6A6A6",
            marginTop: -10,
          }}
          href="https://github.com/Anto-MSHK/my_ati_admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </div>
      <div
        style={{
          width: widthSize > cutWidth ? "65%" : undefined,
          height: 350,
          margin:
            widthSize > cutWidth
              ? "-90px 0"
              : widthSize > mobileWidth
              ? "-25px 0 -60px 0"
              : "30px 0 -30px 0",
          zIndex: 5,
          position: "relative",
          display: "flex",
          flexDirection: widthSize > cutWidth ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="https://atidstu.ru/">
          <img
            src={logo}
            style={{
              marginBottom: widthSize > cutWidth ? 0 : 10,
              width: 150,
            }}
          />
        </a>
        <div
          style={{
            textAlign: widthSize > cutWidth ? undefined : "center",
            padding: "0 15px ",
          }}
        >
          <h4
            style={{
              color: "#3C3F41",
            }}
          >
            Министерство науки и высшего образования Российской Федерации
          </h4>
          <h4
            style={{
              color: "#3C3F41",
            }}
          >
            Федеральное государственное бюджетное oбразовательное учреждение
            высшего образования{" "}
          </h4>
          <h1
            style={{
              fontSize: widthSize > cutWidth ? 20 : 16,
              lineHeight: widthSize > cutWidth ? undefined : 1,
            }}
          >
            «Донской государственный технический университет»
            <br />
            Технологический институт (филиал) ДГТУ в г. Азове
          </h1>
        </div>
      </div>
      {/* <img
        src={logo}
        style={{
          width: widthSize > cutWidth ? "75%" : "120%",
          height: "auto",
          margin:
            widthSize > cutWidth
              ? "-50px 0"
              : widthSize > mobileWidth
              ? "30px 0 -30px 0"
              : "30px 0 -30px 0",
          zIndex: 5,
          position: "relative",
        }}
        alt=""
      /> */}
      {collapsible ? (
        <Collapse
          ghost
          onChange={() => {
            setIsCollapse((prev) => !prev);
          }}
          style={{ width: "100%" }}
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
        <div
          style={{
            marginTop: widthSize > cutWidth ? -15 : 55,
            width: "100%",
            padding: 10,
          }}
        >
          <DevelopersList />
        </div>
      )}
    </div>
  );
};
