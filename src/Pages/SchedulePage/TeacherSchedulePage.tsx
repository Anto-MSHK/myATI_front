import React, { useState, useEffect, useMemo } from "react";
import { Button, Card, Checkbox, Space, Switch } from "antd";
import { useParams } from "react-router-dom";
import {  useFetchTeacherScheduleQuery } from 'src/State/services/ScheduleApi';
import { useAppDispatch, useAppSelector } from "src/State/hooks";
import { List } from "./List/List";
import { Slider } from "./Slider/Slider";
import { Drop } from "./../../Components/Drop/Drop";
import {
  getWeek,
  setHideSwitch,
  setSwitchWeek,
} from "src/State/Slices/scheduleSettingsSlice";
import { TopDot } from "src/Components/TopDot/TopDot";

interface TeacherSchedulePageI { }

export const TeacherSchedulePage: React.FC<TeacherSchedulePageI> = () => {

  const { teacherName } = useParams();
  const [valueView, setValueView] = useState("slider");

  const { data: teacherSchedule, isLoading } = useFetchTeacherScheduleQuery(
    teacherName as string
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getWeek());
  }, []);

  return (
    <>
      <TopDot itemName={teacherName as string} valueView={valueView} setValueView={setValueView} />
      <Card
        loading={isLoading}
        style={{
          //  width: "100%",
          position: "relative",
          borderRadius: "0 0 10px 10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          paddingTop: 6,
          margin: "0px 15px",

        }}

        bodyStyle={{ padding: "10px 10px 10px 10px" }}
      >

        {valueView === "list" ? (
          <List teacherSchedule={teacherSchedule}  listType = 'teacher'/>
        ) : (
          <div style={{ position: "relative" }}>
            <Slider scheduleType="teacher" teacherSchedule={teacherSchedule} />
          </div>
        )}
      </Card>
    </>
  );
};
