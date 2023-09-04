import React from "react";
import "./SuperBanner.css";
import { Button } from "antd";
import useScreenWidth from "src/Hooks/useScreenSize";
export const SuperBanner = () => {
  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 450;
  return (
    <a href={"https://vk.com/antomshk"}>
      <div className="gradient-background">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: widthSize > mobileWidth ? 120 : 280,
            padding: 15,
          }}
        >
          <h1
            className="fw-light text-white m-0"
            style={{
              color: "white",
              fontWeight: 600,
              marginBottom: widthSize > mobileWidth ? 5 : 15,
            }}
          >
            Ты обучаешься по направлению информационных технологий?
          </h1>
          <h2 style={{ color: "white", fontWeight: 400 }}>
            Ждём тебя в IT клубе нашего института! <b>Напиши нам :)</b>
          </h2>
        </div>
      </div>
    </a>
  );
};
