import React, { FC } from "react";
import { Layout } from "antd";
import { Routes, Route, useParams } from 'react-router-dom';
import { GroupPage } from "src/Pages/GroupPage/GroupPage";
import { SchedulePage } from "src/Pages/SchedulePage/SchedulePage";
import { TeacherInfoPage } from "src/Pages/TeacherInfoPage/TeacherInfoPage";
import { TeacherCard } from 'src/Components/TeacherCard/TeacherCard';
const { Content } = Layout;

interface RouterI {}
export const Router: FC<RouterI> = ({}) => {

  return (
    <Content>
      <Routes>
        <Route path="/groups/fvo" element={<GroupPage faculty={"FVO"} />} />
        <Route path="/groups/spo" element={<GroupPage faculty={"SPO"} />} />
        <Route path="/schedule/:groupName" element={<SchedulePage />} />
        <Route path="/edu/teacher" element={<TeacherInfoPage />}>
          <Route path="/edu/teacher/:teacherName" element={<TeacherInfoPage />} />
        </Route>
      </Routes>
    </Content>
  );
};
