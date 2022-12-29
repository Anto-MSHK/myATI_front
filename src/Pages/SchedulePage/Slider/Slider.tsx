import React, { useEffect, useRef } from "react";
import { Button, Carousel } from "antd";
import { DayCard } from "src/Components/DayCard/DayCard";
import { DayT } from "src/Types/GroupScheduleTypes";

import "./Slider.css";
import {
  OrderedListOutlined,
  PicCenterOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Weekend } from "src/Components/Weekend/Weekend";
import { useAppSelector } from "src/State/hooks";

interface SliderI {
  groupSchedule: DayT[] | undefined;
}

export const Slider: React.FC<SliderI> = ({ groupSchedule }) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  let carousel = useRef<any>();
  const curDayIndex = useAppSelector((state) => state.scheduleSettings.curDay);

  useEffect(() => {
    goTo(curDayIndex, true);
  }, []);

  const next = () => {
    (carousel as any).next();
  };

  const prev = () => {
    (carousel as any).prev();
  };

  const goTo = (slideNumber: number, dontAnimate: boolean = true) => {
    (carousel as any).goTo(slideNumber, dontAnimate);
  };

  return (
    <div>
      <div style={{ position: "absolute", zIndex: 25, right: 22, top: 15 }}>
        <Button
          style={{ margin: "0 10px 0 0" }}
          shape="circle"
          icon={<ArrowLeftOutlined />}
          size={"middle"}
          onClick={() => {
            prev();
          }}
        />
        <Button
          shape="circle"
          icon={<ArrowRightOutlined />}
          size={"middle"}
          onClick={() => {
            next();
          }}
        />
      </div>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          right: 0,
          left: 0,
          margin: "14px 0 0 0",
          position: "absolute",
          color: "white",
          zIndex: 10,
        }}
      >
        <h3 className="text">пн</h3>
        <h3 className="text">вт</h3>
        <h3 className="text">ср</h3>
        <h3 className="text">чт</h3>
        <h3 className="text">пт</h3>
        <h3 className="text">сб</h3>
      </div>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,21,41,0) 0%, rgba(0,21,41,0) 22%, rgba(0,21,41,1) 38%, rgba(0,21,41,1) 100%)",
          height: 60,
          left: 0,
          right: 0,
          position: "absolute",
          zIndex: 2,
          borderRadius: "10px",
        }}
      />
      <Carousel
        afterChange={onChange}
        dots={{ className: "dot" }}
        style={{
          backgroundColor: "#001529",
          borderRadius: "10px",
          overflow: "hidden",
        }}
        dotPosition="top"
        ref={(node) => (carousel = node as any)}
      >
        {groupSchedule?.map((day, index) => (
          <div
            key={`${day.lessons} + ${index}`}
            style={{ marginBottom: "10px" }}
          >
            <DayCard
              dayOfWeek={day.dayOfWeek}
              isWeekend={day.isWeekend}
              lessons={day.lessons}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
