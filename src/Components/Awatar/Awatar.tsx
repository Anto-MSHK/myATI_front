import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import "./Awatar.scss";

export const Awatar = () => {
    return (
        <div className="Awatar-container">
            <h2>Hello!</h2>{" "}
            <Avatar
                shape="square"
                icon={<UserOutlined />}
                style={{ marginLeft: 10 }}
            />
        </div>
    );
};
