import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DayT, ScheduleStateResponseT } from "src/Types/ScheduleTypes";
import {
  dayTeacher,
  resultSheduleByTeacher,
} from "src/Types/TeacherScheduleTypes";

export const scheduleApi = createApi({
  reducerPath: "scheduleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://myati.onrender.com/schedule/",
  }),
  endpoints: (builder) => ({
    fetchSchedule: builder.query<
      DayT[],
      { name: string; type: "group" | "teacher" }
    >({
      query: ({ name, type }) => ({
        url: `${type}?name=${name}`,
      }),
      transformResponse: (response: ScheduleStateResponseT) =>
        response.result.sort((a, b) => a.dayOfWeek - b.dayOfWeek),
    }),
  }),
});

export const { useFetchScheduleQuery } = scheduleApi;
