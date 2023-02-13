import React, { FC } from "react";
import { Button } from "antd";
import { PushpinOutlined } from "@ant-design/icons";

interface PinButtonI {
  disabled?: boolean;
  style?: React.CSSProperties;
}
export const PinButton: FC<PinButtonI> = ({ disabled, style }) => {
  return (
    <Button
      style={{ width: 32, ...style }}
      icon={<PushpinOutlined style={{ fontSize: 12 }} disabled={disabled} />}
    />
  );
};
