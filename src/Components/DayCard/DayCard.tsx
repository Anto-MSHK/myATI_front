import { Button, Card } from "antd";
import React, { FC } from "react";
import { LessonCard, LessonCardI } from "src/Components/LessonCard/LessonCard";
import { LessonT } from "src/Types/GroupScheduleTypes";
import { Weekend } from "../Weekend/Weekend";

export interface DayCardI {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5;
  isWeekend: boolean;
  lessons: LessonT[];
  children?: any;
}

const week = {
  0: "понедельник",
  1: "вторник",
  2: "среда",
  3: "четверг",
  4: "пятница",
  5: "суббота",
};

export const DayCard: FC<DayCardI> = ({ dayOfWeek, lessons }) => {
  return (
    <Card
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
          justifyContent: "space-between",
          margin: "0 10px 0 0",
        }}
      >
        <h1 style={{ marginLeft: 10, color: "white", marginBottom: 16 }}>
          {week[dayOfWeek]}
        </h1>
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
