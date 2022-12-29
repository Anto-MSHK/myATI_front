import React, { useState, useEffect, useMemo } from "react";
import { DayCard } from "src/Components/DayCard/DayCard";
import { Button, Card, Space, Switch } from "antd";
import { useParams } from "react-router-dom";
import { useFetchGroupScheduleQuery } from "src/State/services/ScheduleApi";
import { useAppSelector } from "src/State/hooks";
import { ViewSwitch } from "src/Components/ViewSwitch/ViewSwitch";
import {
  OrderedListOutlined,
  PicCenterOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import type { CheckboxOptionType, RadioChangeEvent } from "antd";
import { List } from "./List/List";
import { Slider } from "./Slider/Slider";

/* const [timetable, setTimetable] = useState<any>(); */
export const SchedulePage: React.FC = () => {
  const { groupName } = useParams();

  const { data: groupSchedule, isLoading } = useFetchGroupScheduleQuery(
    groupName as string
  );

  const [value, setValue] = useState("slider");

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
  };

  const options: CheckboxOptionType[] = [
    { label: <PicCenterOutlined />, value: "slider" },
    { label: <OrderedListOutlined />, value: "list" },
  ];

  return (
    <Card
      loading={isLoading}
      bodyStyle={{ padding: 10 }}
      title={
        <Space style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>{groupName}</h1>
          <ViewSwitch value={value} onChange={onChange} options={options} />
        </Space>
      }
      style={{ width: "100%" }}
    >
      {value === "list" ? (
        <List groupSchedule={groupSchedule} />
      ) : (
        <div style={{ position: "relative" }}>
          <Slider groupSchedule={groupSchedule} />
        </div>
      )}
    </Card>
  );
};
