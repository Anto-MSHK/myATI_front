import { Button, Dropdown, MenuProps, Space } from "antd";
import React from "react";
import { PushpinOutlined } from "@ant-design/icons";
import Tabs from "./Tabs";
import { useAppSelector } from "src/State/hooks";
export const TabsMobile = () => {
  const pins = useAppSelector((state) => state.pins);
  const items: MenuProps["items"] = [
    {
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {pins.groups.length > 0 || pins.teachers.length > 0 ? (
            <Tabs />
          ) : (
            <h4 style={{ fontWeight: 600, margin: "5px" }}>нет закреплённых</h4>
          )}
        </div>
      ),
      key: "0",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Button>
        Закладки
        <PushpinOutlined />
      </Button>
    </Dropdown>
  );
};

export default TabsMobile;
