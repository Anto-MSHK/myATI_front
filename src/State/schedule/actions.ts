export enum SCHEDULE {
  GET = "SCHEDULE/GET",
}

export type getScheduleAT = {
  type: string;
};

export const getScheduleA = (): getScheduleAT => ({
  type: SCHEDULE.GET,
});

export type ScheduleAction = getScheduleAT;
