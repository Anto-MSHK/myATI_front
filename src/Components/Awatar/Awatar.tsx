import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Awatar.module.css";

export const Awatar = () => {
    return (
        <div className={styles.container} style={{ display: "flex", alignItems: "center" }}>
            <h2>Hello!</h2>{" "}
            <Avatar
                shape="square"
                icon={<UserOutlined />}
                style={{ marginLeft: 10 }}
            />
        </div>
    );
};
