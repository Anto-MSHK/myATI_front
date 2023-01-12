import React, { useState, useEffect, useMemo, FC } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/State/hooks";
import { ViewSwitch } from "src/Components/ViewSwitch/ViewSwitch";
import {
  PicCenterOutlined,
  ProfileOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { CheckboxOptionType, RadioChangeEvent, Space } from "antd";
import { Drop } from "./../../Components/Drop/Drop";
import {
  setHideSwitch,
  setSwitchWeek,
} from "src/State/Slices/scheduleSettingsSlice";
import { MenuProps } from "rc-menu";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import styles from "./TopDot.module.css";
interface TopDotI {
  valueView: string;
  setValueView: any;
  itemName: string;
}

export const TopDot: FC<TopDotI> = ({ valueView, setValueView, itemName }) => {

  const week = useAppSelector((state) => state.scheduleSettings.switchWeek);
  const dispatch = useAppDispatch();

  const hideSwitch = useAppSelector(
    (state) => state.scheduleSettings.hideSwitch
  );

  const onHideSwitch = (e: CheckboxChangeEvent) => {
    dispatch(setHideSwitch(e.target.checked));
  };
  const onHideWeekend = (e: CheckboxChangeEvent) => {
    //  dispatch(setHideSwitch(e.target.checked));
  };

  const onChangeView = ({ target: { value } }: RadioChangeEvent) => {
    setValueView(value);
  };
  const onChangeWeek = ({ target: { value } }: RadioChangeEvent) => {
    setValueWeek(value);
  };

  const [valueWeek, setValueWeek] = useState(week);
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
  return (
    <div
      style={{
        display: "flex",
        position: "sticky",
        height: 62,

        padding: 12,
        top: 80,
        background: "white",
        zIndex: 20,
        borderRadius: "10px ",
        borderColor: "#F0F0F0",
        border: "solid #F0F0F0 1px",
        //   overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Space
        className={styles.container}
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <h1>{itemName}</h1>
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
    </div>
  );
};
