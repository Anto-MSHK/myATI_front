import { Button, Card } from "antd";
import React, { FC } from "react";
import { LessonCard, LessonCardI } from "src/Components/LessonCard/LessonCard";
import { LessonT } from "src/Types/ScheduleTypes";
import { Weekend } from "../Weekend/Weekend";
import { LeftCircleFilled } from "@ant-design/icons";
import { useAppSelector } from "src/State/hooks";
import { lessonTeacher } from "src/Types/TeacherScheduleTypes";
export interface DayCardI {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5;
  lessons: LessonT[];
  ref?: any;
}

const week = {
  0: "понедельник",
  1: "вторник",
  2: "среда",
  3: "четверг",
  4: "пятница",
  5: "суббота",
};

export const DayCard: FC<DayCardI> = ({ dayOfWeek, lessons, ref }) => {
  const curDayIndex = useAppSelector((state) => state.scheduleSettings.curDay);

  return (
    <Card
      ref={ref}
      style={{
        width: "100%",
        backgroundColor: "#001529",
        height: "100%",
        borderWidth: 0,
      }}
      bodyStyle={{ padding: 15 }}
    >
      <div
        style={{
          display: "flex",
          margin: "0 10px 0 0",
          alignItems: "center",
          marginLeft: 10,
          marginBottom: 20,
        }}
      >
        <h1
          style={{
            color: "white",

            fontWeight: 500,
          }}
        >
          {week[dayOfWeek]}
        </h1>
        {curDayIndex === +dayOfWeek ? (
          <LeftCircleFilled
            size={100}
            style={{
              color: "#4096FF",
              margin: "8px 0 0 10px",
              fontSize: 24,
            }}
          />
        ) : (
          <></>
        )}
      </div>
      {lessons.map((lesson, index) => (
        <div key={`${lesson.time} +${index}`}>
          <LessonCard
            count={lesson.count}
            time={lesson.time}
            data={lesson.data}
            group={lesson.group}
            dayOfWeek={dayOfWeek}
          />
        </div>
      ))}
      {lessons.length === 0 && <Weekend />}
    </Card>
  );
};
