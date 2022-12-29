import { type } from "@testing-library/user-event/dist/type";
import { Card, Radio, RadioChangeEvent, Tag } from "antd";
import React, { FC, useState, useEffect } from "react";
import checkIsLessonActive from "src/Functions/CheckIsWeekAndLessonActive";
import { lessonDataTeacher, subject } from "src/Types/TeacherScheduleTypes";
import "./LessonCard.css";
import { useAppDispatch, useAppSelector } from "src/State/hooks";
type subjectData = {
  subject: subject;
  teacher?: {
    name: string;
    degree: string;
  };
  cabinet?: string;
};

type teacherData = {
  subject: subject;
  cabinet?: string;
};

/* export type lessonDataTeacher = {
  subject: subject
  cabinet: string
} */
export type byWeek = {
  topWeek: subjectData;
  lowerWeek?: subjectData;
  [key: string | "topWeek" | "lowerWeek"]:
    | subjectData
    | (subjectData | undefined);
};

export interface LessonCardI {
  count: any;
  time: { from: string; to: string };
  data: byWeek;
  group?: string;

  dayOfWeek: number;
}

type LessonActiveT = {
  backroundColor: string;
  color: string;
};

const options = [
  { label: "верхняя", value: "topWeek" },
  { label: "нижняя", value: "lowerWeek" },
];

export const LessonCard: FC<LessonCardI> = ({
  count,
  time,
  data,
  group,
  dayOfWeek,
}) => {
  const week = useAppSelector((state) => state.scheduleSettings.switchWeek);
  const hideSwitch = useAppSelector(
    (state) => state.scheduleSettings.hideSwitch
  );

  const [curWeek, setCurWeek] = useState<"topWeek" | "lowerWeek">("topWeek");
  const [weekBtn, setWeekBtn] = useState<"topWeek" | "lowerWeek">(week);
  const [isLessonActive, setIsLessonActive] = useState<LessonActiveT>({
    backroundColor: "blue",
    color: "black",
  });

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setWeekBtn(value);
    setCurWeek(value);
  };

  useEffect(() => {
    if (data.lowerWeek) {
      setWeekBtn(week);
      setCurWeek(week);
    }
  }, [week, data.lowerWeek]);
  useEffect(() => {
    if (checkIsLessonActive(time.from, time.to, dayOfWeek)) {
      setIsLessonActive({
        backroundColor: "#4096FF",
        color: "white",
      });
    } else setIsLessonActive({ backroundColor: "blue", color: "black" });
  }, [time, dayOfWeek]);

  return (
    <div className="lesson">
      {data.lowerWeek && !hideSwitch && (
        <Radio.Group
          className="lesson__radio-week"
          options={options}
          optionType="button"
          buttonStyle="solid"
          onChange={onChange}
          value={weekBtn}
        />
      )}
      <Card
        className="lesson-card"
        size="small"
        style={
          data.lowerWeek && !hideSwitch ? { borderRadius: "0 0 10px 10px" } : {}
        }
        title={
          <div className="lesson-card__main main">
            <Tag className="main__count" color={isLessonActive.backroundColor}>
              <h2
                style={{ color: isLessonActive.color }}
                className="main__count-text"
              >
                {count}
              </h2>
            </Tag>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1
                className="main__title"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {data[curWeek]?.subject ? (
                  <div
                    style={{
                      fontSize: 20,
                      textOverflow: "ellipsis",
                      // overflow: "hidden",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {data[curWeek]?.subject && data[curWeek]?.subject.title}
                    <h3>{group}</h3>
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: 20,
                      textOverflow: "ellipsis",
                      // overflow: "hidden",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Пары нет
                  </div>
                )}
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
                <h3 style={{ fontWeight: 600, fontSize: 16 }}>
                  {data[curWeek]?.teacher?.name},{" "}
                  {data[curWeek]?.teacher?.degree}
                </h3>
                <h3 style={{ fontWeight: 600, fontSize: 16 }}>
                  {data[curWeek]?.cabinet} каб.
                </h3>
              </div>

              <h2
                className="secondary__info-type"
                style={{ fontWeight: 600, fontSize: 18 }}
              >
                {data[curWeek]?.subject.type}
                {/*  {
                  JSON.stringify(console.log(data.topWeek))
                } */}
              </h2>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
