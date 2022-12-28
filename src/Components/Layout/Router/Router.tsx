import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { GroupPage } from "src/Pages/GroupPage/GroupPage";
const { Content } = Layout;

export const Router = () => {
  return (
    <Content>
      <Routes>
        <Route path="/schedule/fvo" element={<GroupPage faculty={"FVO"} />} />
        <Route path="/schedule/spo" element={<GroupPage faculty={"SPO"} />} />
      </Routes>
    </Content>
  );
};
