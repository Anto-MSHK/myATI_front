import React, { FC } from "react";
import { Breadcrumb } from "antd";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb style={{ fontSize: 18 }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
};
