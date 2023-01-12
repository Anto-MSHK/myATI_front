import React, { useState, useEffect, useMemo } from "react";
import { DayCard } from "src/Components/DayCard/DayCard";
import { Button, Card, Checkbox, Space, Switch } from "antd";
import { useParams } from "react-router-dom";
import { useFetchScheduleQuery } from "src/State/services/ScheduleApi";
import { useAppDispatch, useAppSelector } from "src/State/hooks";
import { ViewSwitch } from "src/Components/ViewSwitch/ViewSwitch";
import {
  PicCenterOutlined,
  ProfileOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import type { CheckboxOptionType, RadioChangeEvent } from "antd";
import { List } from "./List/List";
import { Slider } from "./Slider/Slider";
import { Drop } from "./../../Components/Drop/Drop";
import {
  getWeek,
  setHideSwitch,
  setSwitchWeek,
} from "src/State/Slices/scheduleSettingsSlice";
import { TopDot } from "src/Components/TopDot/TopDot";

interface SchedulePageI {
  type: "group" | "teacher";
}
/* const [timetable, setTimetable] = useState<any>(); */
export const SchedulePage: React.FC<SchedulePageI> = ({ type }) => {
  const { name } = useParams();
  const [valueView, setValueView] = useState("slider");

  const {
    data: schedule,
    isLoading,
    isFetching,
  } = useFetchScheduleQuery({
    name: name as string,
    type,
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getWeek());
  }, []);

  return (
    <>
      <TopDot
        itemName={name as string}
        valueView={valueView}
        setValueView={setValueView}
      />
      <Card
        loading={isLoading || isFetching}
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
          <List schedule={schedule} />
        ) : (
          <div style={{ position: "relative" }}>
            <Slider schedule={schedule} />
          </div>
        )}
      </Card>
    </>
  );
};
