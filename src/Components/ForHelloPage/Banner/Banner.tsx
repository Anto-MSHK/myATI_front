import React, { FC, useState } from "react";
import { TeamOutlined, GithubOutlined } from "@ant-design/icons";
import { Button, Collapse } from "antd";
import DevelopersList from "src/Components/DevelopersList/DevelopersList";
import styles from "./Banner.module.css";
import logo from "../../../icons/fulllogo.png";
import play from "../../../icons/google-play-badge.png";
import useScreenWidth from "src/Hooks/useScreenSize";

interface BannerI {
  collapsible?: boolean;
}
export const Banner: FC<BannerI> = ({ collapsible = true }) => {
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
          }}
          href="https://github.com/Anto-MSHK/my_ati_admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub проекта
        </Button>
        {/* <Button
          href="https://play.google.com/store/apps/details?id=com.antomshk.myati&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          type="ghost"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 55 }}
          icon={
            <img
              style={{ height: "100%" }}
              alt="Get it on Google Play"
              src={play}
            />
          }
        ></Button> */}
      </div>
      <img
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
      />
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
