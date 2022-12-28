import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { GroupPage } from "src/Pages/GroupPage/GroupPage";
const { Content } = Layout;

export const Router = () => {
  return (
    <Content style={{ padding: "0 24px", minHeight: 280 }}>
      <Routes>
        <Route path="/schedule/fvo" element={<GroupPage />} />
      </Routes>
    </Content>
  );
};
