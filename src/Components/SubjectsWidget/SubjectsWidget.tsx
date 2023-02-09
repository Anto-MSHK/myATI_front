import React from "react";
import { Card, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { MenuProps } from "rc-menu";
import { IWidget } from "src/Components/GroupsWidget/GroupsWidget";
import styles from "./SubjectsWidget.module.css";
import useScreenWidth from "src/Hooks/useScreenSize";

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

export const SubjectsWidget: React.FC<IWidget> = ({ teacher }) => {
  const items: MenuProps["items"] =
    teacher.subjects &&
    teacher.subjects.map((name: any) => getItem(name, name, name));

  const widthSize = useScreenWidth();
  const cutWidth = 1000;
  const mobileWidth = 600;

  return (
    <div className={styles.container}>
      <h3>Предметы</h3>
      <Card bodyStyle={{ padding: 10 }}>
        <Menu
          className={
            widthSize > cutWidth
              ? styles.scrollable_list
              : styles.scrollable_list_adapt
          }
          id="menu"
          //  selectable
          inlineIndent={10}
          mode="vertical"
          items={items}
        />
      </Card>
    </div>
  );
};
