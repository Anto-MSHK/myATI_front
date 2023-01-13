type subjectT = {
  title: string;
  type: string;
};

type teacherT = {
  name: string;
  degree: string;
};

export type dataLessonT = {
  subject: subjectT;
  teacher?: teacherT;
  cabinet?: string;
};

export type dataT = {
  topWeek: dataLessonT;
  lowerWeek?: dataLessonT;
  [key: string | "topWeek" | "lowerWeek"]:
    | dataLessonT
    | (dataLessonT | undefined);
};

export type LessonT = {
  count: number;
  time: { from: string; to: string };
  data: dataT;
  group?: string;
  groups?: string[];
};

export type DayT = {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5;
  isWeekend: boolean;
  lessons: LessonT[];
};

export type ScheduleStateResponseT = {
  status: string;
  result: DayT[];
};
