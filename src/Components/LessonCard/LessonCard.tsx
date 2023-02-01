import { type } from "@testing-library/user-event/dist/type";
import { Card, Radio, RadioChangeEvent, Tag } from "antd";
import React, { FC, useState, useEffect } from "react";
import checkIsLessonActive from "src/Functions/CheckIsWeekAndLessonActive";
import { lessonDataTeacher, subject } from "src/Types/TeacherScheduleTypes";
import "./LessonCard.css";
import { useAppDispatch, useAppSelector } from "src/State/hooks";
import { dataT } from "src/Types/ScheduleTypes";
import { Link } from "react-router-dom";
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
  data: dataT;
  group?: string;
  groups?: string[];

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
  groups,
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
    <div className={"lesson"}>
      {data.lowerWeek && !hideSwitch && (
        <Radio.Group
          className={"lesson__radio_week"}
          options={options}
          optionType="button"
          buttonStyle="solid"
          onChange={onChange}
          value={weekBtn}
        />
      )}
      <Card
        className={"lesson_card"}
        size="small"
        style={
          data.lowerWeek && !hideSwitch ? { borderRadius: "0 0 10px 10px" } : {}
        }
        title={
          <div className={"lesson_card__main"}>
            <Tag
              className={"main__count"}
              color={isLessonActive.backroundColor}
            >
              <h2
                style={{ color: isLessonActive.color }}
                className={"main__count_text"}
              >
                {count}
              </h2>
            </Tag>
            <div className={"first_container"}>
              <h1 className={"main__title"}>
                {data[curWeek]?.subject ? (
                  <div>
                    {data[curWeek]?.subject && data[curWeek]?.subject.title}
                  </div>
                ) : (
                  <div>Пары нет</div>
                )}
              </h1>
            </div>
          </div>
        }
      >
        <div className={"secondary"}>
          <div className={"secondary__time"}>
            <h3>{time.from}</h3>
            <p className={"secondary__time_line"} />
            <h3>{time.to}</h3>
          </div>
          {data[curWeek]?.subject && (
            <div className={"secondary__info"}>
              <div className={"secondary__info_tc"}>
                {data[curWeek]?.teacher && data[curWeek]?.teacher?.name && (
                  <Link to={`/edu/teacher/${data[curWeek]?.teacher?.name}`}>
                    <Tag className={"tag_antd"} color="blue">
                      {data[curWeek]?.teacher?.name}
                      <i>
                        {data[curWeek]?.teacher?.degree &&
                          " (" + data[curWeek]?.teacher?.degree + ")"}
                      </i>
                    </Tag>
                  </Link>
                )}
                <h3>
                  {groups
                    ? groups.map((curGroup) => (
                        <Link to={`/schedule/${curGroup}`}>
                          <Tag className={"tag"} color="blue">
                            {curGroup}
                          </Tag>
                        </Link>
                      ))
                    : group && (
                        <Link to={`/schedule/${group}`}>
                          <Tag className={"tag"} color="blue">
                            {group}
                          </Tag>
                        </Link>
                      )}
                  {data[curWeek]?.cabinet} каб.
                </h3>
              </div>

              <h3 className={"secondary__info_type"}>
                {data[curWeek]?.subject.type}
              </h3>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
