import React, { useEffect, useRef } from "react";
import { Button, Carousel } from "antd";
import { DayCard } from "src/Components/DayCard/DayCard";
import { DayT } from "src/Types/ScheduleTypes";
import "./Slider.css";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useAppSelector } from "src/State/hooks";
import useScreenWidth from "src/Hooks/useScreenSize";

interface SliderI {
  schedule: DayT[] | undefined;
  withScrollTo?: boolean;
}

const weakDay = ["пн", "вт", "ср", "чт", "пт", "сб"];

export const Slider: React.FC<SliderI> = ({
  schedule,
  withScrollTo = true,
}) => {
  const dayList = schedule?.map((day, index) => (
    <div key={`${day.lessons} + ${index}`} style={{ marginBottom: "10px" }}>
      <DayCard dayOfWeek={day.dayOfWeek} lessons={day.lessons} />
    </div>
  ));

  const onChange = (currentSlide: number) => {

  };

  let carousel = useRef<any>();
  const curDayIndex = useAppSelector((state) => state.scheduleSettings.curDay);

  useEffect(() => {
    goTo(curDayIndex, true);
    let element = document.getElementById("scroll");
    if (element && withScrollTo) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  });

  const next = () => {
    (carousel as any).next();
  };

  const prev = () => {
    (carousel as any).prev();
  };

  const goTo = (slideNumber: number, dontAnimate: boolean = true) => {
    (carousel as any).goTo(slideNumber, dontAnimate);
  };

  const widthSize = useScreenWidth();
  const mobileWidth = 1000;

  return (
    <div>
      <div
        style={
          widthSize > mobileWidth
            ? {
                position: "absolute",
                zIndex: 15,
                right: 22,
                top: 15,
              }
            : { position: "absolute", zIndex: 15, right: 22, top: 70 }
        }
      >
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
        {weakDay.map((day, index) => (
          <h3 className="text" key={day + index}>
            {day}
          </h3>
        ))}
      </div>
      <div
        id={"scroll"}
        style={{
          background:
            "linear-gradient(90deg, rgba(0,21,41,0) 0%, rgba(0,21,41,0) 0%, rgba(0,21,41,1) 10%, rgba(0,21,41,1) 100%)",
          height: 60,
          left: "240px",
          right: 0,
          position: "absolute",
          zIndex: 2,
          borderRadius: "10px",
          top: widthSize < mobileWidth ? 50 : 0,
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
        initialSlide={curDayIndex}
        ref={(node) => (carousel = node as any)}
        draggable
      >
        {dayList}
      </Carousel>
    </div>
  );
};
