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
  Input,
  RadioChangeEvent,
  Select,
  Space,
} from "antd";
import { Drop } from "../Drop/Drop";
import {
  setHideSwitch,
  setSwitchWeek,
} from "src/State/Slices/scheduleSettingsSlice";
import { MenuProps } from "rc-menu";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import styles from "./TopDotEdu.module.css";
import useScreenWidth from "src/Hooks/useScreenSize";

interface TopDotEduI {
  onSearch: (searchQuery: string) => any;
  sortTeachers: (sort: string) => any;
  title: string;
  valueView?: string;
  setValueView?: any;
}

export const TopDotEdu: FC<TopDotEduI> = ({
  onSearch,
  sortTeachers,
  title,
  valueView,
  setValueView,
}) => {
  const { groupName } = useParams();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("Сведения");

  useEffect(() => {
    if (valueView === "info") {
      setValue("Сведения");
    } else setValue("Расписание");
  }, [valueView]);

  const optionsView: CheckboxOptionType[] = [
    { label: <PicCenterOutlined />, value: "info" },
    { label: <ProfileOutlined />, value: "schedule" },
  ];

  const onChangeView = ({ target: { value } }: RadioChangeEvent) => {
    setValueView(value);
  };

  const hideSwitch = useAppSelector(
    (state) => state.scheduleSettings.hideSwitch
  );

  const onHideSwitch = (e: CheckboxChangeEvent) => {
    dispatch(setHideSwitch(e.target.checked));
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
  ];

  const items_min_menu: MenuProps["items"] = [
    {
      label: (
        <Select
          className={styles.select_antd}
          showArrow
          defaultValue={"По алфавиту"}
          onSelect={sortTeachers}
        >
          <Select.Option value="По алфавиту">По алфавиту</Select.Option>
          <Select.Option value="Обратный порядок">
            Обратный порядок
          </Select.Option>
        </Select>
      ),
      key: "2",
    },
    {
      label: <Drop items={items} />,
      key: "2",
    },
  ];

  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 600;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
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
      <h2
        style={{
          marginTop: widthSize < mobileWidth ? -8 : 0,
          marginRight: 20,
          color: widthSize > mobileWidth ? "black" : "white",
        }}
      >
        {title}
      </h2>
      {widthSize > mobileWidth ? (
        <div className={styles.container}>
          <div>
            {widthSize > cutWidth && (
              <Input
                className={styles.input_antd}
                placeholder="Поиск..."
                allowClear
                size="small"
                onChange={(e) => onSearch(e.target.value)}
              />
            )}

            <Select
              className={styles.select_antd}
              showArrow
              defaultValue={"По алфавиту"}
              onSelect={sortTeachers}
            >
              <Select.Option value="По алфавиту">По алфавиту</Select.Option>
              <Select.Option value="Обратный порядок">
                Обратный порядок
              </Select.Option>
            </Select>
          </div>
          <Drop items={items} />
        </div>
      ) : (
        <Dropdown menu={{ items: items_min_menu }} trigger={["click"]}>
          <Button
            style={{
              background: widthSize > mobileWidth ? undefined : "#001529",
              marginTop: widthSize < mobileWidth ? -12 : 0,
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
  );
};
