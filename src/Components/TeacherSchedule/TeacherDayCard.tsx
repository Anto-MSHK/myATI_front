import { Card } from "antd";
import React, { FC } from "react";
// import { CoupleCard, CoupleCardI } from "../CoupleCard/CoupleCard";
import { Weekend } from 'src/Components/Weekend/Weekend';

import { dayTeacher, lessonDataTeacher, lessonTeacher } from 'src/Types/TeacherScheduleTypes';
import { TeacherCoupleCard } from 'src/Components/TeacherSchedule/TeacherCoupleCard';
import { LeftCircleFilled } from '@ant-design/icons';
import { useAppSelector } from 'src/State/hooks';




export interface TeacherDayCardI {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5;
  lessons: lessonTeacher[];
  children?: any;
  isLoading?: boolean;

}

const week = {
  0: "Понедельник",
  1: "Вторник",
  2: "Среда",
  3: "Четверг",
  4: "Пятница",
  5: "Суббота",
};

export const TeacherDayCard: FC<TeacherDayCardI> = ({ dayOfWeek, lessons, isLoading }) => {
  const curDayIndex = useAppSelector((state) => state.scheduleSettings.curDay);
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
          margin: "0 10px 0 0",
          //  alignItems: "center",
        }}
      >
        <h1
          style={{
            marginLeft: 10,
            color: "white",
            marginBottom: 16,
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
              width: 30,
              height: 30,
              margin: "8px 0 0 0",
            }}
          />
        ) : (
          <></>
        )}
      </div>
      {lessons.map((lesson, index) => (
        <div key={`${lesson.time} +${index}`}>
          <TeacherCoupleCard
            dayOfWeek={dayOfWeek}
            count={lesson.count + 1}
            time={lesson.time}
            data={lesson.data}
            group={lesson.group}
            isLoading={isLoading}
          />
        </div>
      ))}
      {lessons.length === 0 && <Weekend />}
    </Card>

  );
};
{/* <div>
      {
        lessons.length
          ?
          <Card title={week[dayOfWeek]} style={{ width: '100%', marginBottom:'20px' }}>
            {
              lessons.map((lesson, index) => (

                <div  key={(`${lesson.time} +${index}`)}>
                  <TeacherCoupleCard
                    dayOfWeek={dayOfWeek}
                    count={lesson.count + 1}
                    time={lesson.time}
                    data={lesson.data}
                    group={lesson.group}
                    isLoading = {isLoading}
                  />
                </div>

              ))


            }

          </Card>
          :
          <Weekend  dayOfWeek={week[dayOfWeek]} />
      }
    </div> */}