import { Card, Radio, RadioChangeEvent, Tag } from "antd";
import React, { FC, useState } from "react";
import { lessonDataTeacher } from 'src/Types/TeacherScheduleTypes';
import '../LessonCard/LessonCard.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { setGroup } from 'src/State/Slices/groupSlice';
import checkIsLessonActive from 'src/Functions/CheckIsWeekAndLessonActive';
import { useAppDispatch } from 'src/State/hooks';

type lessonType = {
  subject: {
    title: string,
    type: string,
  }
  cabinet: string
}

export type TeacherCoupleCardI = {
  isLoading?: boolean;
  dayOfWeek: number;
  group: string;
  count: number;
  time: { from: string; to: string };
  data: {
    topWeek?: lessonDataTeacher | undefined,
    lowerWeek?: lessonDataTeacher | undefined,
    [key: string | "topWeek" | "lowerWeek"]: lessonDataTeacher | (lessonDataTeacher | undefined)
  }
}

const options = ["верхняя", "нижняя"];
type LessonActiveT = {
  backroundColor: string;
  color: string
}

export const TeacherCoupleCard: FC<TeacherCoupleCardI> = ({ count, time, data, group, isLoading, dayOfWeek }) => {

  var [curWeek, setCurWeek] = useState<"topWeek" | "lowerWeek">("topWeek");
  const [isLessonActive, setIsLessonActive] = useState<LessonActiveT>({ backroundColor: 'blue', color: 'black' })

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    if (value === "верхняя") setCurWeek("topWeek");
    else setCurWeek("lowerWeek");
  };

  const dispatch = useAppDispatch()
  const groupsName = group.split(/\s+/i)

  

  useEffect(() => {

    checkIsLessonActive(time.from, time.to, dayOfWeek)
      ?
      
      setIsLessonActive({ backroundColor: 'rgb(240, 178, 72)', color: 'white' })
      :
      setIsLessonActive({ backroundColor: 'blue', color: 'black' })

  }, [time, dayOfWeek])


  return (
    <div className="lesson">
      {data.lowerWeek && (
        <Radio.Group
          className="lesson__radio-week"
          options={options}
          optionType="button"
          buttonStyle="solid"
          onChange={onChange}
          defaultValue="верхняя"
        />
      )}
      <Card
        loading={isLoading}
        className="lesson-card"
        size="small"
        title={
          <div className="lesson-card__main main">
            <Tag className="main__count" color={isLessonActive.backroundColor}>
              <h2 style={{ color: isLessonActive.color }} className="main__count-text">{count}</h2>
            </Tag>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1 className="main__title" style={{ display: 'flex', justifyContent: 'space-between' }}>
                {data[curWeek]?.subject
                  ?
                  <div >
                    {data[curWeek]?.subject && data[curWeek]?.subject.title}
                    <h3 style={{ display: 'flex', gap: '5px' }}>
                      {

                        groupsName.length
                          ?
                          groupsName.map((currentGroup, index = 0) => {
                            return (
                            <div key={currentGroup + index} onClick={() => dispatch(setGroup(currentGroup))}>
                              <Link to={`schedule/${currentGroup}`}>{currentGroup}</Link>
                              <>ㅤ</>
                            </div>
                          )})
                          :
                          <span>{group}</span>
                      }

                    </h3>
                  </div>
                  : "Пары нет"
                }
              </h1>
            </div>
          </div>
        }
      >
        <div className="lesson-card__secondary secondary">
          <div className="secondary__time">
            <h3>{time.from}</h3>
            <p className="secondary__time-line" />
            <h3>{time.to}</h3>
          </div>
          {data[curWeek]?.subject && (
            <div className="secondary__info">
              <div className="secondary__info-tc">
                <h3>{data[curWeek]?.cabinet} каб.</h3>
              </div>
              <h2 className="secondary__info-type">
                {data[curWeek]?.subject.type}
              </h2>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
