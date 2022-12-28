export type subjectT = {
  title: string;
  type: string;
};

type teacherT = {
  name: string;
  degree: string;
};

 type dataLessonT = {
  subject: subjectT;
  teacher: teacherT;
  cabinet: string;
};

 type dataT = {
  topWeek: dataLessonT;
  lowerWeek?: dataLessonT;
  [key: string | "topWeek" | "lowerWeek"]:
    | dataLessonT
    | (dataLessonT | undefined);
};
 type LessonT = {
  count: 1 | 2 | 3 | 4 | 5;
  time: { from: string; to: string };
  data: dataT;
};

 type DayT = {
  dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6;
  isWeekend: boolean;
  lessons: LessonT[];
};

type ScheduleGroupsStateT = {
  group: string;
  days: DayT[];
}[];
