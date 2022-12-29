import React, { useState, useEffect, useMemo } from "react";
import { DayCard } from "src/Components/DayCard/DayCard";
import { Button, Card, Space, Switch } from "antd";
import { useParams } from "react-router-dom";
import { useFetchGroupScheduleQuery } from "src/State/services/ScheduleApi";
import { useAppSelector } from "src/State/hooks";
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

/* const [timetable, setTimetable] = useState<any>(); */
export const SchedulePage: React.FC = () => {
  const { groupName } = useParams();

  const { data: groupSchedule, isLoading } = useFetchGroupScheduleQuery(
    groupName as string
  );

  const [valueView, setValueView] = useState("slider");
  const [valueWeek, setValueWeek] = useState("topWeek");

  const onChangeView = ({ target: { value } }: RadioChangeEvent) => {
    setValueView(value);
  };
  const onChangeWeek = ({ target: { value } }: RadioChangeEvent) => {
    setValueWeek(value);
  };

  const optionsView: CheckboxOptionType[] = [
    { label: <PicCenterOutlined />, value: "slider" },
    { label: <ProfileOutlined />, value: "list" },
  ];

  const optionsWeek: CheckboxOptionType[] = [
    {
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 style={{ margin: "0 10px 0 0", fontWeight: 500, fontSize: 14 }}>
            верхняя
          </h4>
          <UpOutlined />
        </div>
      ),
      value: "topWeek",
    },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4
            style={{
              margin: "0 10px 0 0",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            нижняя
          </h4>
          <DownOutlined />
        </div>
      ),
      value: "lowerWeek",
    },
  ];

  return (
    <Card
      loading={isLoading}
      bodyStyle={{ padding: 10 }}
      title={
        <Space style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>{groupName}</h1>
          <div style={{ display: "flex" }}>
            <Drop />
            <ViewSwitch
              title={"Неделя:"}
              value={valueWeek}
              onChange={onChangeWeek}
              options={optionsWeek}
              style={{ marginRight: 25, marginLeft: 25 }}
            />
            <ViewSwitch
              title={"Вид:"}
              value={valueView}
              onChange={onChangeView}
              options={optionsView}
            />
          </div>
        </Space>
      }
      style={{ width: "100%" }}
    >
      {valueView === "list" ? (
        <List groupSchedule={groupSchedule} />
      ) : (
        <div style={{ position: "relative" }}>
          <Slider groupSchedule={groupSchedule} />
        </div>
      )}
    </Card>
  );
};
