
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DayT, ScheduleStateResponseT } from 'src/Types/GroupScheduleTypes';
import { dayTeacher, resultSheduleByTeacher } from 'src/Types/TeacherScheduleTypes';






export const scheduleApi = createApi({
    reducerPath: 'groupScheduleApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://myati.onrender.com/schedule/' }),
    endpoints: (builder) => ({
        fetchGroupSchedule: builder.query<DayT[], string>({
            query: (groupName: string) => ({
                name: groupName,
                url: `group?name=${groupName}`,
            }),
            transformResponse: (response: ScheduleStateResponseT) => response.result.sort(
                (a, b) => a.dayOfWeek - b.dayOfWeek)
        }),
        fetchTeacherSchedule: builder.query<dayTeacher[], string>({
            query: (teacherName: string) => ({
                url: `teacher?name=${teacherName}`,
            }),
            transformResponse: (response: resultSheduleByTeacher) => {
              
               response.result.forEach(day => day.lessons.sort((a,b)=> a.count - b.count))
               console.log(response.result);
               return response.result
            }
        }),
    })
})


export const { useFetchGroupScheduleQuery, useFetchTeacherScheduleQuery } = scheduleApi;