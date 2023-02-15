import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ITeacher,
  ITeacherListResponse,
  ITeacherResponse,
} from "src/Types/TeacherTypes";

export const teachersApi = createApi({
  reducerPath: "teachersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://194.67.121.107:3000/edu" }),
  tagTypes: ["Teacher"],
  endpoints: (builder) => ({
    fetchTeachers: builder.query<ITeacher[], void>({
      query: () => ({
        url: "/teacher?name=",
      }),
      transformResponse: (response: ITeacherListResponse) =>
        response.result.sort((a, b) => a.name.localeCompare(b.name)),
    }),
    fetchTeacher: builder.query<ITeacher, string>({
      query: (teacherName: string) => ({
        url: `/teacher?name=${teacherName}`,
      }),

      transformResponse: (response: ITeacherResponse) => response.result,
    }),
  }),
});

export const { useFetchTeachersQuery, useFetchTeacherQuery } = teachersApi;
