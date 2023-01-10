import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Checkbox, MenuProps, Radio } from "antd";
import { Dropdown, Space } from "antd";

interface DropI {
  items: MenuProps["items"];
}
export const Drop: React.FC<DropI> = ({ items }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()} style={{ margin: "auto 0" }}>
        <Space>
          Дополнительно
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
