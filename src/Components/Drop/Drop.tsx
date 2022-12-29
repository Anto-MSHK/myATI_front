import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Checkbox, MenuProps, Radio } from "antd";
import { Dropdown, Space } from "antd";

export const Drop: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  const items: MenuProps["items"] = [
    {
      label: <Checkbox>Скрыть переключатель возле пар</Checkbox>,
      key: "1",
    },
    {
      label: <Checkbox>Скрыть выходные</Checkbox>,
      key: "2",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()} style={{ margin: "auto" }}>
        <Space>
          Дополнительно
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
