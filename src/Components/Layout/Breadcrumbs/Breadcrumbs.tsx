import React, { FC } from "react";
import { Breadcrumb } from "antd";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb separator=">" style={{ fontSize: 18 }}>
      <Breadcrumb.Item href="">User</Breadcrumb.Item>
      <Breadcrumb.Item href="">Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
};
