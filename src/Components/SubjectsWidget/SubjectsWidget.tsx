import React from 'react';
import {Card, Menu} from "antd";
import {MenuItemType} from "antd/es/menu/hooks/useItems";
import {MenuProps} from "rc-menu";

function getItem(
    label: React.ReactNode,
    key: React.Key,
    id: string
): MenuItemType {
    return {
        key,
        label,
        id,
    } as MenuItemType;
}


export const SubjectsWidget = (props: any) => {

    const items: MenuProps["items"] = props.data?.subjects && props.data?.subjects.map((name: any) => getItem(name, name, name));

    return (
        <div>
            <h3
                style={{
                    padding: "5px 0 5px 10px",
                    color: "white",
                    fontWeight: 500,
                }}
            >
                Предметы
            </h3>
            <Card bodyStyle={{ padding: 10 }}>
                <Menu
                    id="menu"
                    //  selectable
                    inlineIndent={10}
                    className="scrollable-list"
                    mode="vertical"
                    items={items}
                    style={{
                        maxWidth: 300,
                        height: 300,
                        padding: 0,
                        overflowY: "auto",
                    }}
                />
            </Card>
        </div>
    );
};