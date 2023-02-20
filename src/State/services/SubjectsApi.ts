import { API_URL } from './../../API/http';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ISubject,
  ISubjectsResponse,
  ISubjectResponse,
} from "src/Types/SubjectTypes";

export const subjectsApi = createApi({
  reducerPath: "subjectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/edu` }),
  endpoints: (builder) => ({
    fetchAllSubject: builder.query<string[], number>({
      query: (limit: number = 135) => ({
        url: "/subject?title=",
        params: {
          _limit: limit,
        },
      }),
      transformResponse: (response: ISubjectsResponse) =>
        response.result.sort((a, b) => a.localeCompare(b)),
    }),
    fetchSubject: builder.query<ISubject, string>({
      query: (subjectName: string) => ({
        url: `/subject?title=${subjectName}`,
      }),
      transformResponse: (response: ISubjectResponse) => {
        response.result = {
          ...response.result,
          types: response.result.types?.map((type) =>
            type.replace(".", "").toLowerCase()
          ),
        };
        return response.result;
      },
    }),
  }),
});

export const { useFetchAllSubjectQuery, useFetchSubjectQuery } = subjectsApi;
