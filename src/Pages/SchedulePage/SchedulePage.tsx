import React, { useState, useEffect, useMemo } from "react";
import { DayCard } from "src/Components/DayCard/DayCard";
import { Button, Card, Checkbox, Space, Switch } from "antd";
import { useParams } from "react-router-dom";
import { useFetchGroupScheduleQuery } from "src/State/services/ScheduleApi";
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
import { MenuProps } from "rc-menu";
import { CheckboxChangeEvent } from "antd/es/checkbox";

/* const [timetable, setTimetable] = useState<any>(); */
export const SchedulePage: React.FC = () => {
  const { groupName } = useParams();

  const { data: groupSchedule, isLoading } = useFetchGroupScheduleQuery(
    groupName as string
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getWeek());
  }, []);

  const hideSwitch = useAppSelector(
    (state) => state.scheduleSettings.hideSwitch
  );
  const week = useAppSelector((state) => state.scheduleSettings.switchWeek);
  const [valueView, setValueView] = useState("slider");
  const [valueWeek, setValueWeek] = useState(week);

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
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            dispatch(setSwitchWeek("topWeek"));
          }}
        >
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
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            dispatch(setSwitchWeek("lowerWeek"));
          }}
        >
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

  const onHideSwitch = (e: CheckboxChangeEvent) => {
    dispatch(setHideSwitch(e.target.checked));
  };
  const onHideWeekend = (e: CheckboxChangeEvent) => {
    //  dispatch(setHideSwitch(e.target.checked));
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Checkbox
          onChange={onHideSwitch}
          value={hideSwitch}
          defaultChecked={hideSwitch}
        >
          Скрыть переключатель возле пар
        </Checkbox>
      ),
      key: "1",
    },
    {
      label: <Checkbox onChange={onHideWeekend}>Скрыть выходные</Checkbox>,
      key: "2",
    },
  ];

  return (
    <Card
      loading={isLoading}
      style={{ width: "100%", position: "relative" }}
      bodyStyle={{ padding: 10 }}
      title={
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "fixed",
            // width: "100%",
            left: 215,
            right: 15,
            margin: "-28px 0 0 0",
            padding: 11,
            background: "white",
            zIndex: 40,
            borderRadius: "10px 10px 0 0 ",
            borderColor: "#F0F0F0",
            border: "solid 1px",
          }}
        >
          <h1>{groupName}</h1>
          <div style={{ display: "flex" }}>
            <Drop items={items} />
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
