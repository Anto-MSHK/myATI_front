import React from "react";
import { Card, Avatar, Space } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import iconVK from "../../icons/iconVK.svg";
import useScreenWidth from "src/Hooks/useScreenSize";
interface DeveloperCardProps {
  name: string;
  role: string;
  avatar: string;
  social: {
    github?: string;
    vk?: string;
  };
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  name,
  role,
  avatar,
  social,
}) => {
  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 450;
  return (
    <Card
      hoverable
      size="small"
      style={{
        //   width: "fit-content",
        cursor: "default",
        width: widthSize > mobileWidth ? "fit-content" : "100%",
      }}
      className="dev-card"
      cover={
        <Avatar
          style={{ margin: "10px 10px 0 10px" }}
          size={64}
          icon={<img src={avatar} alt="avatar" />}
        />
      }
    >
      <Card.Meta
        title={name}
        description={<div style={{ marginTop: -12 }}>{role}</div>}
        style={{ textAlign: "start" }}
      />
      <Space
        size="middle"
        style={{ marginTop: 8, width: "100%", justifyContent: "space-between" }}
      >
        <div
          style={{
            display: "flex",
            marginTop: 8,

            alignItems: "center",
            width: "100%",
          }}
        >
          {social.vk && (
            <a href={social.vk} target="_blank" rel="noopener noreferrer">
              <img src={iconVK} style={{ width: 27 }} />
            </a>
          )}
          {social.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ fontSize: 20, marginBottom: 7 }} />
            </a>
          )}
        </div>
        <p style={{ fontWeight: 600, color: "#1677FF", margin: 0 }}>ВИС-21</p>
      </Space>
    </Card>
  );
};

export default DeveloperCard;
