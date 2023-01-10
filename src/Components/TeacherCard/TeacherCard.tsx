import { Card, Menu, Spin, Switch, Space } from "antd";
import React from "react";
import { ITeacher } from "src/Types/TeacherTypes";

import { useState, useEffect } from "react";

import { useAppSelector } from "src/State/hooks";
import { useFetchTeacherScheduleQuery } from "src/State/services/ScheduleApi";
import { dayTeacher, lessonTeacher } from "src/Types/TeacherScheduleTypes";

export interface TeacherCardI {
  dayOfWeek: any;
  lessons: any;
}

export const TeacherCard: React.FC<ITeacher> = () => {
  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#001529",
        height: "100%",
        borderWidth: 0,
      }}
    ></Card>
  );
};
