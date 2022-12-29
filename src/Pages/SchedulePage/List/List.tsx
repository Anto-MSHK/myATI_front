import React, { FC } from "react";
import { DayCard } from "src/Components/DayCard/DayCard";
import { DayT } from "src/Types/GroupScheduleTypes";
interface ListI {
  groupSchedule: DayT[] | undefined;
}
export const List: FC<ListI> = ({ groupSchedule }) => {
  return (
    <div>
      {groupSchedule?.map((day, index) =>
        !day.lessons.length ? (
          <div key={`${day.lessons} + ${index}`}></div>
        ) : (
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
        )
      )}
    </div>
  );
};
