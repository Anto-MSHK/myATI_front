import React from "react";
import { Card, Avatar, Space } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import iconVK from "../../icons/iconVK.svg";
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
  return (
    <Card
      hoverable
      size="small"
      style={{
        width: "fit-content",
        marginBottom: 20,
        cursor: "default",
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
      <Space size="middle" style={{ marginTop: 8, width: "100%", gap: 4 }}>
        {social.vk && (
          <a href={social.vk} target="_blank" rel="noopener noreferrer">
            <img src={iconVK} style={{ width: 27, marginTop: 5 }} />
          </a>
        )}
        {social.github && (
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            <GithubOutlined style={{ fontSize: 20 }} />
          </a>
        )}
      </Space>
    </Card>
  );
};

export default DeveloperCard;
