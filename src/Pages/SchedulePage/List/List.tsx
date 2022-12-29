import React, { FC, useEffect } from "react";
import { DayCard } from "src/Components/DayCard/DayCard";
import { useScroll } from "src/Hooks/useScroll";
import { useAppSelector } from "src/State/hooks";
import { DayT } from "src/Types/GroupScheduleTypes";
interface ListI {
  groupSchedule: DayT[] | undefined;
}
export const List: FC<ListI> = ({ groupSchedule }) => {
  const curDayIndex = useAppSelector((state) => state.scheduleSettings.curDay);
  let elRefs: any[] = [];
  elRefs[0] = useScroll();
  elRefs[1] = useScroll();
  elRefs[2] = useScroll();
  elRefs[3] = useScroll();
  elRefs[4] = useScroll();
  elRefs[5] = useScroll();

  useEffect(() => {
    elRefs.map((el, index) => {
      if (el[1].current !== null && index === curDayIndex) el[0]();
    });
  }, [elRefs, curDayIndex]); // Runs after component mounts
  return (
    <div>
      {groupSchedule?.map((day, index) =>
        !day.lessons.length ? (
          <div
            key={`${day.lessons} + ${index}`}
            ref={elRefs[day.dayOfWeek][1]}
          ></div>
        ) : (
          <div
            key={`${day.lessons} + ${index}`}
            style={{ marginBottom: "10px" }}
            ref={elRefs[day.dayOfWeek][1]}
          >
            <DayCard
              dayOfWeek={day.dayOfWeek}
              isWeekend={day.isWeekend}
              lessons={day.lessons}
            />
          </div>
        )
      )}
    </div>
  );
};
