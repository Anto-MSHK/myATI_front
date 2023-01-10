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
//import styles from "./TopDot.module.css";
import "./TopDot.scss";

interface TopDotI {
    valueView: string;
    setValueView: any;
}

export const TopDot: FC<TopDotI> = ({ valueView, setValueView }) => {
    const { groupName } = useParams();
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
                <div className="label-div"
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
                    className="label-div"
                    onClick={() => {
                        dispatch(setSwitchWeek("lowerWeek"));
                    }}
                >
                    <h4>
                        нижняя
                    </h4>
                    <DownOutlined />
                </div>
            ),
            value: "lowerWeek",
        },
    ];
    return (
        <div className="div-container">
            <Space className='space-container'>
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
        </div>
    );
};
