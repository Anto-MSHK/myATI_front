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
    const [value, setValue] = useState('Сведения');

    useEffect(() => {
        if (valueView === 'info') {
            setValue('Сведения');
        } else
            setValue('Расписание');
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
    return (
        <div
            className={styles.main_container}
        >
            <h2 style={{ marginTop: 5, marginRight: 20 }}>{title}</h2>
            <div
                className={styles.container}
            >
                <div>
                    <Input
                        className={styles.input_antd}
                        placeholder="Поиск..."
                        allowClear
                        size="small"
                        onChange={(e) => onSearch(e.target.value)}
                    />

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
        </div>
    );
};
