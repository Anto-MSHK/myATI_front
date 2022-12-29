import React, { useState } from "react";
import { Radio } from "antd";
import type { CheckboxOptionType, RadioChangeEvent } from "antd";

interface ViewSwitchI {
  options: CheckboxOptionType[];
  onChange: ({ target: { value } }: RadioChangeEvent) => void;
  value: string;
}
export const ViewSwitch: React.FC<ViewSwitchI> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <Radio.Group
      options={options}
      onChange={onChange}
      value={value}
      optionType={"button"}
      buttonStyle="solid"
    />
  );
};
