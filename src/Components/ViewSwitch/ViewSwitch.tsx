import React, { useState } from "react";
import { Radio } from "antd";
import type { CheckboxOptionType, RadioChangeEvent } from "antd";

interface ViewSwitchI {
  options: CheckboxOptionType[];
  onChange: ({ target: { value } }: RadioChangeEvent) => void;
  value: string;
  title: string;
  style?: React.CSSProperties | undefined;
}
export const ViewSwitch: React.FC<ViewSwitchI> = ({
  options,
  onChange,
  value,
  title,
  style,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", ...style }}>
      <h3 style={{ margin: "0 10px 0 0" }}>{title}</h3>
        <Radio.Group
          style={{display: 'flex'}}
          options={options}
          onChange={onChange}
          value={value}
          optionType={"button"}
          buttonStyle="solid"
        />
    </div>
  );
};
