 export type subject = {
    title: string
    type?: string
  }
  
  export type lessonDataTeacher = {
    subject: subject
    cabinet: string
  }
  
  export type lessonTeacher = {
      id: string
    group: string
    count: number
    time: { from: string; to: string }
    data: {
      topWeek?: lessonDataTeacher | undefined
      lowerWeek?: lessonDataTeacher | undefined
      [key: string | "topWeek" | "lowerWeek"]:
    | lessonDataTeacher
    | (lessonDataTeacher | undefined);
    }
  }
  
  export type dayTeacher = {
    dayOfWeek:  0 | 1 | 2 | 3 | 4 | 5;
    lessons: lessonTeacher[];
  }
  
  export type resultSheduleByTeacher = {
     status: string,
     result: dayTeacher[],
  }