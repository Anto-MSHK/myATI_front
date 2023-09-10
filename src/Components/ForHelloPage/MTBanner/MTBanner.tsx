import React, { FC } from "react";
import mt_logo from "../../../icons/Logo_MT.png";
import useScreenWidth from "src/Hooks/useScreenSize";
interface MTBannerI {
  staticSize?: boolean;
  mobileMax?: boolean;
  style?: React.CSSProperties | undefined;
}
export const MTBanner: FC<MTBannerI> = ({
  staticSize = false,
  mobileMax = false,
  style,
}) => {
  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 450;
  return (
    <a
      style={{
        zIndex: 10,
        ...style,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#000000",
        maxWidth: staticSize
          ? 150
          : widthSize > cutWidth
          ? 150
          : widthSize < cutWidth && !mobileMax
          ? 190
          : "100%",
        display: "flex",
        flexDirection: widthSize > cutWidth ? "column" : "row",
        alignItems: widthSize > cutWidth ? "center" : "center",
        cursor: "pointer",
      }}
      href="https://t.me/mediato4ka"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={mt_logo}
        style={{ width: widthSize > cutWidth ? 120 : 50 }}
        alt={"Медиаточка"}
      />
      <h3
        style={{
          color: "white",
          textAlign: widthSize > cutWidth ? "center" : "start",
          fontWeight: 500,
          fontSize: widthSize > cutWidth ? undefined : 12,
          marginBottom: widthSize > cutWidth ? 15 : 0,
          marginTop: widthSize > cutWidth ? -10 : -3,
        }}
      >
        Подписывайся на студенческие новости!
      </h3>
    </a>
  );
};
