import React, { FC, useEffect, useState } from "react";
import { DayCard } from "src/Components/DayCard/DayCard";
import { useAppSelector } from "src/State/hooks";
import { DayT, LessonT } from "src/Types/ScheduleTypes";
interface ListI {
  schedule: DayT[] | undefined;
}
export const List: React.FC<ListI> = ({ schedule }) => {
  const curDayIndex = useAppSelector((state) => state.scheduleSettings.curDay);

  useEffect(() => {
    let element = document.getElementById("scroll");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, []);

  return (
    <div>
      {schedule?.map((day, index) => (
        <div
          key={`${day.lessons} + ${index}`}
          style={+day.dayOfWeek !== 5 ? { marginBottom: "10px" } : {}}
          id={+day.dayOfWeek === curDayIndex ? "scroll" : ""}
        >
          <DayCard
            key={`${day.lessons} +${index}`}
            dayOfWeek={day.dayOfWeek}
            lessons={day.lessons}
            style={{ paddingTop: 0 }}
          />
        </div>
      ))}
    </div>
  );
};
