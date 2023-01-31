import { Button, Dropdown, Space } from "antd";
import React from "react";
import { PushpinOutlined } from "@ant-design/icons";
export const TabsMobile = () => {
  return (
    <Dropdown>
      <Button>
			Закладки
        <PushpinOutlined />
      </Button>
    </Dropdown>
  );
};

export default TabsMobile;
