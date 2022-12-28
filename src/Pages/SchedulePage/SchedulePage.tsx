import React, { useState, useEffect, useMemo } from "react";
import { DayCard } from "src/Components/DayCard/DayCard";
import { Card, Space, Switch } from "antd";
import { useParams } from "react-router-dom";
import { useFetchGroupScheduleQuery } from "src/State/services/ScheduleApi";
import { useAppSelector } from "src/State/hooks";

/* const [timetable, setTimetable] = useState<any>(); */
export const SchedulePage: React.FC = () => {
  const { groupName } = useParams();
  const [isWeekendHidden, setIsWeekendHidden] = useState(true);
  const { data: groupSchedule, isLoading } = useFetchGroupScheduleQuery(
    groupName as string
  );

  return (
    <Card
      loading={isLoading}
      bodyStyle={{ padding: 10 }}
      title={
        <Space style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>{groupName}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "30px" }}>
              <Switch
                defaultChecked
                onClick={() => setIsWeekendHidden(!isWeekendHidden)}
              />
            </div>
            <span style={{ opacity: ".3" }}>Скрыть выходные</span>
          </div>
        </Space>
      }
      style={{ width: "100%" }}
    >
      <div>
        {groupSchedule?.map((day, index) =>
          isWeekendHidden && !day.lessons.length ? (
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
    </Card>
  );
};
