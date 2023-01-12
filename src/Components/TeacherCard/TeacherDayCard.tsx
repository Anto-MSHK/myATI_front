import { Card } from "antd";
import React, { FC } from "react";
// import { CoupleCard, CoupleCardI } from "../CoupleCard/CoupleCard";
import {Weekend} from 'src/Components/Weekend/Weekend';

import { dayTeacher, lessonDataTeacher, lessonTeacher } from 'src/Types/TeacherScheduleTypes';
import { TeacherCoupleCard } from 'src/Components/TeacherCard/TeacherCoupleCard';



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

export const TeacherDayCard: FC<TeacherDayCardI> = ({ dayOfWeek, lessons, isLoading}) => {
  
  return (

    <div>
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
    </div>
  );
};
