import React, { useState, useEffect, useMemo, FC } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/State/hooks";
import { ViewSwitch } from "src/Components/ViewSwitch/ViewSwitch";
import {
  PicCenterOutlined,
  ProfileOutlined,
  DownOutlined,
  UpOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import {
  Button,
  CheckboxOptionType,
  Dropdown,
  RadioChangeEvent,
  Space,
} from "antd";
import { Drop } from "./../../Components/Drop/Drop";
import {
  setHideSwitch,
  setSwitchWeek,
} from "src/State/Slices/scheduleSettingsSlice";
import { MenuProps } from "rc-menu";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import styles from "./TopDot.module.css";
import useScreenWidth from "src/Hooks/useScreenSize";
import { PinButton } from "../PinButton/PinButton";
interface TopDotI {
  valueView: string;
  setValueView: any;
  itemName: string;
}

export const TopDot: FC<TopDotI> = ({ valueView, setValueView, itemName }) => {
  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 600;

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

  const items_min_menu: MenuProps["items"] = [
    {
      label: (
        <ViewSwitch
          title={"Неделя:"}
          value={valueWeek}
          onChange={onChangeWeek}
          options={optionsWeek}
          //  style={{ marginRight: 25, marginLeft: 25 }}
        />
      ),
      key: "2",
    },
    {
      label: (
        <ViewSwitch
          title={"Вид:"}
          value={valueView}
          onChange={onChangeView}
          options={optionsView}
        />
      ),
      key: "3",
    },
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
      key: "4",
    },
    {
      label: <Checkbox onChange={onHideWeekend}>Скрыть выходные</Checkbox>,
      key: "5",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        position: widthSize > mobileWidth ? "sticky" : undefined,
        height: widthSize > mobileWidth ? 62 : 50,

        padding: 20,
        top: 80,
        background: widthSize > mobileWidth ? "white" : "#001529",
        zIndex: 20,
        borderRadius: widthSize > mobileWidth ? "10px" : 0,
        borderColor: "#F0F0F0",
        border: widthSize > mobileWidth ? "solid #F0F0F0 1px" : undefined,
        //   overflow: "hidden",
        boxShadow:
          widthSize > mobileWidth ? "0 4px 10px rgba(0, 0, 0, 0.5)" : undefined,
      }}
    >
      <Space className={styles.container}>
        <h1 style={{ color: widthSize > mobileWidth ? "black" : "white" }}>
          {itemName}
        </h1>
        <div>
          {widthSize > cutWidth ? (
            <div>
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
              <PinButton style={{ margin: "0 0 0 10px" }} />
            </div>
          ) : (
            <Dropdown menu={{ items: items_min_menu }} trigger={["click"]}>
              <Button
                style={{
                  background: widthSize > mobileWidth ? undefined : "#001529",
                }}
              >
                <MenuOutlined
                  style={{
                    color: widthSize > mobileWidth ? undefined : "white",
                  }}
                />
              </Button>
            </Dropdown>
          )}
        </div>
      </Space>
    </div>
  );
};
