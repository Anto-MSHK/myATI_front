import { Card, Menu, Spin, Switch, Space, Row, Button } from "antd";
import React from "react";
import { ITeacher } from "src/Types/TeacherTypes";

import { useState, useEffect } from "react";

import { useAppSelector } from "src/State/hooks";
import { useFetchTeacherScheduleQuery } from "src/State/services/ScheduleApi";
import { dayTeacher, lessonTeacher } from "src/Types/TeacherScheduleTypes";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { MenuProps } from "rc-menu";

export interface TeacherCardI {
  dayOfWeek: any;
  lessons: any;
}

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

const items: MenuProps["items"] = [
  "Математика",
  "Методы оптимизации",
  "Инструментальные средства информационных систем",
  "Моделирование информационных систем и технологий",
  "Интелектуальные системы и технологии",
  "Математический анализ",
  "Алгебра и аналитическая геометрия",
  "Теория вероятностей и математическая статитстика",
  "Численные методы",
  "Классный час Разговоры о важном",
  "Математика",
  "Методы оптимизации",
  "Инструментальные средства информационных систем",
  "Моделирование информационных систем и технологий",
  "Интелектуальные системы и технологии",
  "Математический анализ",
  "Алгебра и аналитическая геометрия",
  "Теория вероятностей и математическая статитстика",
  "Численные методы",
  "Классный час Разговоры о важном",
].map((name) => getItem(name, name, name));

export const TeacherCard: React.FC<ITeacher> = () => {
  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#001529",
        height: "100%",
        borderWidth: 0,
      }}
      bodyStyle={{
        padding: 15,
      }}
    >
      <div>
        <div style={{ width: "100%", marginBottom: 10 }}>
          <h3
            style={{
              padding: "5px 0 5px 10px",
              color: "white",
              fontWeight: 500,
            }}
          >
            Сведения
          </h3>
          <Card>
            {" "}
            <h2> Абрамов Д.В.</h2>
          </Card>
        </div>
      </div>
      <div style={{ display: "flex", gap: 15, height: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <h3
              style={{
                padding: "5px 0 5px 10px",
                color: "white",
                fontWeight: 500,
              }}
            >
              Группы
            </h3>
            <Card
              bodyStyle={{ padding: 15 }}
              style={{ borderRadius: "10px 10px 0 0" }}
            >
              <Row gutter={[5, 5]} style={{ gap: 10 }} justify={"start"}>
                {" "}
                {[
                  "ВИС21",
                  "ВКТ21",
                  "ЗИС11",
                  "ПКС-3-73",
                  "ВИС21",
                  "ВКТ21",
                  "ЗИС11",
                  "ПКС-3-73",
                  "ВИС21",
                  "ВКТ21",
                  "ЗИС11",
                  "ПКС-3-73",
                  "ВИС21",
                  "ВКТ21",
                  "ЗИС11",
                  "ПКС-3-73",
                ].map((group) => (
                  <Card size="small">{group}</Card>
                ))}
              </Row>
            </Card>
          </div>
          <Button type="primary" style={{ borderRadius: "0 0 10px 10px " }}>
            Открыть расписание
          </Button>
        </div>
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
      </div>
    </Card>
  );
};
