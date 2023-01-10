import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

export const Awatar = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h2>Hello!</h2>{" "}
      <Avatar
        shape="square"
        icon={<UserOutlined />}
        style={{ marginLeft: 10 }}
      />
    </div>
  );
};
