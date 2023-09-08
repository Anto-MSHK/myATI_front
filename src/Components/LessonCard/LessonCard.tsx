import { type } from "@testing-library/user-event/dist/type";
import { Avatar, Card, Radio, RadioChangeEvent, Space, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { FC, useState, useEffect } from "react";
import checkIsLessonActive from "src/Functions/CheckIsWeekAndLessonActive";
import { lessonDataTeacher, subject } from "src/Types/TeacherScheduleTypes";
import "./LessonCard.css";
import { useAppDispatch, useAppSelector } from "src/State/hooks";
import { dataT } from "src/Types/ScheduleTypes";
import { Link } from "react-router-dom";
import useScreenWidth from "src/Hooks/useScreenSize";
import { InfoTag } from "../InfoTag/InfoTag";
type subjectData = {
  subject: subject;
  teacher?: {
    name: string;
    degree: string;
    photo_url?: string | undefined;
    fullName?: string | undefined;
    cathedra?: string | undefined;
    allInfo?: string | undefined;
    additional?: string | undefined;
  };
  cabinet?: string;
};

type teacherData = {
  subject: subject;
  cabinet?: string;
  groups?: string[];
  photo_url?: string | undefined;
  fullName?: string | undefined;
  cathedra?: string | undefined;
  allInfo?: string | undefined;
  additional?: string | undefined;
};

/* export type lessonDataTeacher = {
  subject: subject
  cabinet: string
} */
export type byWeek = {
  topWeek: subjectData & teacherData;
  lowerWeek?: subjectData & teacherData;
  [key: string | "topWeek" | "lowerWeek"]:
    | (subjectData & teacherData)
    | ((subjectData & teacherData) | undefined);
};

export interface LessonCardI {
  count: any;
  time: { from: string; to: string };
  data: byWeek;
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

  const widthSize = useScreenWidth();
  const cutWidth = 900;
  const mobileWidth = 600;

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
        headStyle={{ margin: widthSize < mobileWidth ? "-5px 0 " : undefined }}
        bodyStyle={{ padding: widthSize < mobileWidth ? 5 : undefined }}
        title={
          <div className={"lesson_card__main"}>
            <Tag
              className={"main__count"}
              style={{
                width: widthSize < mobileWidth ? 50 : undefined,
              }}
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
              <h1
                className={"main__title"}
                style={{
                  margin: widthSize < mobileWidth ? " 0 0 0 50px" : undefined,
                }}
              >
                {data[curWeek]?.subject ? (
                  <div
                    style={{
                      fontSize: widthSize < mobileWidth ? 18 : undefined,
                    }}
                  >
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
          <div
            className={"secondary__time"}
            style={{
              marginRight: widthSize < mobileWidth ? 10 : undefined,
            }}
          >
            <h3
              style={{
                fontSize: widthSize < mobileWidth ? 10 : undefined,
              }}
            >
              {time.from}
            </h3>
            <p className={"secondary__time_line"} />
            <h3
              style={{
                fontSize: widthSize < mobileWidth ? 10 : undefined,
              }}
            >
              {time.to}
            </h3>
          </div>
          {data[curWeek]?.subject && (
            <div
              className={"secondary__info"}
              style={{
                margin: widthSize < mobileWidth ? "0 0 0 10px" : "0 0 0 25px",
              }}
            >
              <div className={"secondary__info_tc"}>
                {data[curWeek]?.teacher && data[curWeek]?.teacher?.name && (
                  <InfoTag
                    query={data[curWeek]?.teacher?.name}
                    title={data[curWeek]?.teacher?.name}
                    additional={data[curWeek]?.teacher?.additional}
                    desc={data[curWeek]?.teacher?.degree}
                    photo_url={data[curWeek]?.teacher?.photo_url}
                    popover={{
                      fullTitle: data[curWeek]?.teacher?.fullName,
                      desc: data[curWeek]?.teacher?.additional,
                    }}
                  />
                )}

                <h3>
                  {data[curWeek]?.groups &&
                    (data[curWeek]?.groups as string[]).map((curGroup) => (
                      <Link to={`/schedule/group/${curGroup}`}>
                        <Tag className={"tag"} color="blue">
                          {curGroup}
                        </Tag>
                      </Link>
                    ))}
                  {data[curWeek]?.cabinet &&
                  data[curWeek]?.cabinet !== "нет данных"
                    ? data[curWeek]?.cabinet + " каб."
                    : undefined}
                </h3>
                {widthSize < mobileWidth && data[curWeek]?.subject.type && (
                  <h4>
                    <i>Тип пары: </i>
                    {data[curWeek]?.subject.type}
                  </h4>
                )}
              </div>

              {widthSize > mobileWidth && (
                <h3 className={"secondary__info_type"}>
                  {data[curWeek]?.subject.type}
                </h3>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
