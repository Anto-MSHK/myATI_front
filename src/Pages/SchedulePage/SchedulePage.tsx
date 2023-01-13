import React, { useState, useEffect, useMemo } from "react";
import { DayCard } from "src/Components/DayCard/DayCard";
import { Button, Card, Checkbox, Space, Switch } from "antd";
import { useParams } from "react-router-dom";
import { useFetchScheduleQuery } from "src/State/services/ScheduleApi";
import { useAppDispatch, useAppSelector } from "src/State/hooks";
import { ViewSwitch } from "src/Components/ViewSwitch/ViewSwitch";
import {
  PicCenterOutlined,
  ProfileOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import type { CheckboxOptionType, RadioChangeEvent } from "antd";
import { List } from "./List/List";
import { Slider } from "./Slider/Slider";
import { Drop } from "./../../Components/Drop/Drop";
import {
  getWeek,
  setHideSwitch,
  setSwitchWeek,
} from "src/State/Slices/scheduleSettingsSlice";
import { TopDot } from "src/Components/TopDot/TopDot";
import { LessonT, DayT } from 'src/Types/ScheduleTypes';

interface SchedulePageI {
  type: "group" | "teacher";
}
/* const [timetable, setTimetable] = useState<any>(); */
export const SchedulePage: React.FC<SchedulePageI> = ({ type }) => {
  const { name } = useParams();
  const [valueView, setValueView] = useState("slider");
  const [mergedSchedule, setMergedSchedule] = useState<DayT[]>([])

  const {
    data: schedule,
    isLoading,
    isFetching,
  } = useFetchScheduleQuery({
    name: name as string,
    type,
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getWeek());
  }, []);


  useEffect(() => {

    schedule?.forEach(day => {
      day.lessons.forEach((lesson) => {
       if (!lesson.group) {
         return
       }
      })
     })
    
     setMergedSchedule([])
     console.log('schedule');
     console.log(schedule);

    if (schedule) {
      let tempolarMerdgedSchedule: DayT[] = schedule.map((day, index) => {
        var prevLesson: LessonT | undefined
        if (day.lessons.length) {


          prevLesson = structuredClone(day.lessons[index])
          let group = prevLesson?.group
          if (prevLesson && prevLesson.groups === undefined) {
            prevLesson.groups = new Array<string>(group as string)
          }

        }
        else prevLesson = undefined
        day.lessons.sort((a, b) => (a.count+1) - (b.count+1))
        if (day.lessons.length) {
          return {
            ...day,
            lessons: day.lessons.reduce(function (accum: LessonT[], lesson: LessonT, index) {

              if (prevLesson?.count !== lesson.count) {
                prevLesson = { ...lesson, groups: prevLesson?.groups }
                accum.push(lesson)
                return accum
              }
              if (prevLesson.group === lesson.group) {
                accum.push(lesson)
                return accum
              }
              if (prevLesson.groups && lesson.group && !prevLesson.groups.includes(lesson.group)) {
                prevLesson = { ...prevLesson, groups: [...prevLesson.groups, lesson.group] }

                accum.pop()
                accum.push(prevLesson)
                console.log('Брух');
                console.log(prevLesson.groups);
              }

              return accum

              /* .filter((value, index, self) => {
                  return self.findIndex(v => v.count === value.count) === index;
              }) */


            }, [])
          }
        }
        return day
      })
      setMergedSchedule(tempolarMerdgedSchedule)
    }
  }, [schedule])


  return (
    <>
      <TopDot
        itemName={name as string}
        valueView={valueView}
        setValueView={setValueView}
      />
      <Card
        loading={isLoading || isFetching}
        style={{
          //  width: "100%",
          position: "relative",
          borderRadius: "0 0 10px 10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          paddingTop: 6,
          margin: "0px 15px",
        }}
        bodyStyle={{ padding: "10px 10px 10px 10px" }}
      >
        {valueView === "list" ? (
          <List schedule={mergedSchedule} />
        ) : (
          <div style={{ position: "relative" }}>
            <Slider schedule={mergedSchedule} />
          </div>
        )}
      </Card>
    </>
  );
};
