import { Card, Row, Select, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GroupCard } from "src/Components/GroupCard/GroupCard";
import { useAppSelector } from "src/State/hooks";
import styles from "./MainPage.module.css";
import { Slider } from "src/Pages/SchedulePage/Slider/Slider";
import pin from "../../icons/pin_active.png";
import { DayCard } from "src/Components/DayCard/DayCard";
import { useFetchScheduleQuery } from "src/State/services/ScheduleApi";
import useScreenWidth from "src/Hooks/useScreenSize";
export const MainPage = () => {
  const pins = useAppSelector((state) => state.pins);
  const [curGroup, setCurGroup] = useState(pins.groups[0]);
  const {
    data: schedule,
    isLoading,
    isFetching,
  } = useFetchScheduleQuery({
    name: curGroup,
    type: "group",
  });
  const handleChange = (value: string) => {
    setCurGroup(value);
  };

  const widthSize = useScreenWidth();
  const cutWidth = 900;
  const mobileWidth = 600;

  return (
    <div style={{ padding: widthSize > mobileWidth ? 0 : 20 }}>
      <h1 style={{ marginBottom: 20, marginLeft: 0 }}>Подобрано для тебя</h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: widthSize > cutWidth ? "row" : "column",
          //  justifyContent: "center",
          gap: 20,
        }}
      >
        <Card
          size="small"
          className={styles.main}
          style={{ width: "100%", maxWidth: 400, overflow: "hidden" }}
          cover={
            <div className={styles.cards_container}>
              <Row gutter={[5, 5]} style={{ gap: 5 }} justify={"start"}>
                {pins.groups.length > 0 ? (
                  pins.groups?.map((group) => (
                    <Link to={`/schedule/group/${group}`}>
                      <Card
                        hoverable
                        size="small"
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          //  backgroundColor: "#E6F4FF",
                          border: "2px solid #91CAFF",
                        }}
                      >
                        {group}
                      </Card>
                    </Link>
                  ))
                ) : (
                  <Card size="small" style={{ margin: 0, padding: 5 }}>
                    Ты пока не закрепил. Нажми на значёк{" "}
                    <img src={pin} style={{ width: 15 }} alt="" /> чтобы группа
                    отображалась здесь.
                  </Card>
                )}
              </Row>
            </div>
          }
          actions={[]}
        >
          <Meta
            style={{ padding: "10px 0" }}
            title={<h1 style={{ fontWeight: 600 }}>Важные группы</h1>}
            description={"Ты раннее закрепил их"}
          />
        </Card>
        <Card
          size="small"
          className={styles.main}
          style={{ width: "100%", maxWidth: 500, overflow: "hidden" }}
          cover={
            <div className={styles.cards_container}>
              <Row gutter={[5, 5]} style={{ gap: 5 }} justify={"start"}>
                {pins.teachers.length > 1 ? (
                  pins.teachers?.map((teacher) => (
                    <Link to={`/edu/teacher/${teacher}`}>
                      <Card
                        hoverable
                        size="small"
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          backgroundColor: "#E6F4FF",
                          border: "2px solid #91CAFF",
                        }}
                      >
                        {teacher}
                      </Card>
                    </Link>
                  ))
                ) : (
                  <Card size="small" style={{ margin: 0, padding: 5 }}>
                    Ты пока не отметил. Нажми на значёк{" "}
                    <img src={pin} style={{ width: 15 }} alt="" /> чтобы
                    преподаватель отображался здесь.
                  </Card>
                )}
              </Row>
            </div>
          }
          actions={[]}
        >
          <Meta
            style={{ padding: "10px 0" }}
            title={<h1 style={{ fontWeight: 600 }}>Важные преподаватели</h1>}
            description={"Ты раннее отметил их"}
          />
        </Card>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginTop: 20, marginBottom: 20, marginRight: 20 }}>
          Расписание по группам
        </h1>
        {pins.groups.length > 0 && (
          <Select
            defaultValue={pins.groups[0]}
            style={{ width: 120 }}
            onChange={handleChange}
            options={pins.groups.map((group) => {
              return { value: group, label: group };
            })}
          />
        )}
      </div>
      {schedule && (
        <div style={{ position: "relative" }}>
          <Slider schedule={schedule} />
        </div>
      )}
    </div>
  );
};
