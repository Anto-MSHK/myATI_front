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
import {
  CheckboxOptionType,
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
  const [value, setValue] = useState('Сведения')

  useEffect(()=>{
    if (valueView === 'info') {
      setValue('Сведения')
    } else
    setValue('Расписание')
  }, [valueView])


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
      <h2 style={{ marginTop: 5, marginRight: 20 }}>{title}</h2>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
        }}
        className={styles.container}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input
            placeholder="Поиск..."
            allowClear
            size="small"
            onChange={(e) => onSearch(e.target.value)}
            style={{ maxWidth: "200px", height: "100%" }}
          />

          <Select
            showArrow
            defaultValue={"По алфавиту"}
            onSelect={sortTeachers}
            style={{ marginLeft: 10, marginRight: 10, width: "max-content" }}
          >
            <Select.Option value="По алфавиту">По алфавиту</Select.Option>
            <Select.Option value="Обратный порядок">
              Обратный порядок
            </Select.Option>
          </Select>
        
        </div>
        <Drop items={items} />
      </div>
    </div>
  );
};
