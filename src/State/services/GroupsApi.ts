import { API_URL } from './../../API/http';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GroupStateT,
  GroupsStateResponseT,
  GroupStateResponseT,
} from "src/Types/GroupTypes";

export const groupsApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/group` }),
  endpoints: (builder) => ({
    fetchAllGroups: builder.query<GroupStateT[], undefined>({
      query: (limit: number = 135) => ({
        url: "/subject?title=",
        params: {
          _limit: limit,
        },
      }),
      transformResponse: (response: GroupsStateResponseT) => response.result,
    }),
    fetchFacultyGroups: builder.query<
      GroupStateT[],
      { faculty: string; course?: number }
    >({
      query: (params: { faculty: string; course?: number }) => ({
        url: `?faculty=${params.faculty}&course=${
          params.course ? params.course : ""
        }`,
      }),
      transformResponse: (response: GroupsStateResponseT) => {
        console.log("!!!");
        return response.result;
      },
    }),
    fetchGroup: builder.query<GroupStateT, string>({
      query: (groupName: string) => ({
        url: `group?name=${groupName}`,
      }),
      transformResponse: (response: GroupStateResponseT) => response.result,
    }),
  }),
});

export const { useFetchFacultyGroupsQuery, useFetchGroupQuery } = groupsApi;
