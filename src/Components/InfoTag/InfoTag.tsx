import { Avatar, Card, Popover, Space, Tag } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import useScreenWidth from "src/Hooks/useScreenSize";
import { UserOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
interface InfoTagI {
  query: string | undefined;
  title: string | undefined;
  photo_url?: string | undefined | null;
  desc?: string | undefined;
  additional?: string | undefined;
  popover: {
    fullTitle?: string | undefined;
    desc?: string | undefined;
  };
}
export const InfoTag: FC<InfoTagI> = ({
  query,
  title,

  photo_url,
  desc,
  additional,
  popover,
}) => {
  const widthSize = useScreenWidth();
  const cutWidth = 900;
  const mobileWidth = 600;

  const content = (
    <div style={{ border: "3px solid #3D94FF", borderRadius: 8 }}>
      <Space style={{ alignSelf: "center" }}>
        {photo_url && (
          <img
            alt="photo"
            src={photo_url}
            style={{
              height: 140,
              objectFit: "cover",
              borderRadius: 10,
              marginBottom: -5,
              padding: 4,
            }}
          />
        )}
        <div
          style={{
            justifyContent: "start",
            alignSelf: "start",
            paddingRight: 10,
            display: "flex",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <h2 style={{ whiteSpace: "pre-wrap" }}>{popover.fullTitle}</h2>
          {desc && <i style={{ marginTop: -3, fontWeight: 600 }}>{desc}</i>}
          {additional && <p style={{ margin: 0 }}>{additional}</p>}
        </div>
      </Space>
    </div>
  );
  if (photo_url)
    return (
      <Popover
        // placement="bottomLeft"
        content={content}
        zIndex={100}
        overlayInnerStyle={{ margin: 0, padding: 0 }}
        style={{ zIndex: 100, position: "relative" }}
      >
        <Link to={`/edu/teacher/${query}`}>
          <Tag className={"tag_antd"} bordered={false}>
            <Space>
              {photo_url !== null && (
                <Avatar
                  style={{
                    backgroundColor: "rgb(134 134 134)",
                    width: widthSize > mobileWidth ? 45 : 35,
                    height: widthSize > mobileWidth ? 45 : 35,
                  }}
                  icon={
                    <UserOutlined
                      style={{
                        fontSize: widthSize > mobileWidth ? 23 : 20,
                        height: widthSize > mobileWidth ? 40 : 30,
                      }}
                    />
                  }
                  src={
                    photo_url && (
                      <img
                        style={{ objectFit: "cover" }}
                        src={photo_url}
                        alt="avatar"
                      />
                    )
                  }
                />
              )}
              <div>
                <h3
                  style={{
                    fontSize: widthSize > mobileWidth ? undefined : 12,
                    fontWeight: 700,
                  }}
                >
                  {" "}
                  {title} <i>{desc && " (" + desc + ")"}</i>
                </h3>

                {additional && widthSize > mobileWidth && (
                  <i
                    style={{
                      color: "rgb(134 134 134)",
                      fontWeight: 500,
                      fontSize: widthSize > mobileWidth ? 12 : 10,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {additional?.slice(0, widthSize > mobileWidth ? 250 : 21) +
                      (widthSize < mobileWidth ? "..." : "")}
                  </i>
                )}
              </div>
            </Space>
          </Tag>
        </Link>
      </Popover>
    );
  else
    return (
      <Link to={`/edu/teacher/${title}`}>
        <Tag className={"tag"} bordered={false}>
          {title}
        </Tag>
      </Link>
    );
};
