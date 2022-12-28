import { SCHEDULE, ScheduleAction } from "./actions";
/* import { ScheduleGroupsStateT } from "./types"; */
/* 
const initialState: ScheduleGroupsStateT = [
  {
    group: "ВИС-11",
    days: [
      {
        dayOfWeek: 1,
        isWeekend: false,
        lessons: [
          {
            count: 1,
            time: { from: "8:30", to: "10:10" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
              lowerWeek: {
                subject: {
                  title: "Разработка профессиональных приложений",
                  type: "пр.",
                },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "236",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
        ],
      },
      {
        dayOfWeek: 2,
        isWeekend: false,
        lessons: [
          {
            count: 1,
            time: { from: "8:30", to: "10:10" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
              lowerWeek: {
                subject: {
                  title: "Разработка профессиональных приложений",
                  type: "пр.",
                },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "236",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 3,
            time: { from: "12:30", to: "14:05" },
            data: {
              topWeek: {
                subject: { title: "Геометрия", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
        ],
      },
      {
        dayOfWeek: 3,
        isWeekend: false,
        lessons: [
          {
            count: 1,
            time: { from: "8:30", to: "10:10" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
              lowerWeek: {
                subject: {
                  title: "Разработка профессиональных приложений",
                  type: "пр.",
                },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "236",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 3,
            time: { from: "12:30", to: "14:05" },
            data: {
              topWeek: {
                subject: { title: "Геометрия", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
        ],
      },
      {
        dayOfWeek: 4,
        isWeekend: false,
        lessons: [
          {
            count: 1,
            time: { from: "8:30", to: "10:10" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
              lowerWeek: {
                subject: {
                  title: "Разработка профессиональных приложений",
                  type: "пр.",
                },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "236",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 3,
            time: { from: "12:30", to: "14:05" },
            data: {
              topWeek: {
                subject: { title: "Геометрия", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
        ],
      },
      {
        dayOfWeek: 5,
        isWeekend: false,
        lessons: [
          {
            count: 1,
            time: { from: "8:30", to: "10:10" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
              lowerWeek: {
                subject: {
                  title: "Разработка профессиональных приложений",
                  type: "пр.",
                },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "236",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 3,
            time: { from: "12:30", to: "14:05" },
            data: {
              topWeek: {
                subject: { title: "Геометрия", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
        ],
      },
      {
        dayOfWeek: 6,
        isWeekend: false,
        lessons: [
          {
            count: 1,
            time: { from: "8:30", to: "10:10" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
              lowerWeek: {
                subject: {
                  title: "Разработка профессиональных приложений",
                  type: "пр.",
                },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "236",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 3,
            time: { from: "12:30", to: "14:05" },
            data: {
              topWeek: {
                subject: { title: "Геометрия", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 1,
            time: { from: "8:30", to: "10:10" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
              lowerWeek: {
                subject: {
                  title: "Разработка профессиональных приложений",
                  type: "пр.",
                },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "236",
              },
            },
          },
          {
            count: 2,
            time: { from: "10:15", to: "11:50" },
            data: {
              topWeek: {
                subject: { title: "Мат. анализ", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
          {
            count: 3,
            time: { from: "12:30", to: "14:05" },
            data: {
              topWeek: {
                subject: { title: "Геометрия", type: "лб." },
                teacher: { name: "Чумак", degree: "к.м.н" },
                cabinet: "202",
              },
            },
          },
        ],
      },
    ],
  },
];

export const scheduleReducer = (
  state: ScheduleGroupsStateT = initialState,
  action: ScheduleAction
) => {
  switch (action.type) {
    case SCHEDULE.GET:
      // const { name, surename, age } = <getScheduleAT>action;
      return { ...state };

    // define rest of actions here
    default:
      return state;
  }
}; */
