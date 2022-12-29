import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataApi } from "src/API/data";

type scheduleSettingsSliceState = {
  curWeek: "topWeek" | "lowerWeek";
  switchWeek: "topWeek" | "lowerWeek";
  hideSwitch: boolean;
  curDay: number;
  weekDates: string[];
  curDate: string;
};

const initialState: scheduleSettingsSliceState = {
  curWeek: "topWeek",
  switchWeek: "topWeek",
  hideSwitch: false,
  curDay: 0,
  weekDates: [],
  curDate: "",
};

export const getWeek = createAsyncThunk(
  "scheduleSettings/getWeek",
  async () => {
    return await dataApi.getWeek();
  }
);

const scheduleSettingsSlice = createSlice({
  name: "scheduleSettings",
  initialState,
  reducers: {
    setCurWeek(state, action: PayloadAction<"topWeek" | "lowerWeek">) {
      state.curWeek = action.payload;
    },
    setSwitchWeek(state, action: PayloadAction<"topWeek" | "lowerWeek">) {
      state.switchWeek = action.payload;
    },
    setHideSwitch(state, action: PayloadAction<boolean>) {
      state.hideSwitch = action.payload;
    },
    setCurDayAndWeek: (state) => {
      const curDate = new Date(
        new Date().toLocaleDateString("en-US", { timeZone: "Europe/Moscow" })
      );

      state.curDate = curDate.toLocaleDateString("en-US", {
        timeZone: "Europe/Moscow",
      });

      const weekDays: any[] = [];
      for (let i = 1; i <= 7; i++) {
        weekDays.push(
          new Date(
            curDate.setDate(curDate.getDate() - curDate.getDay() + i)
          ).toLocaleDateString("en-US", { timeZone: "Europe/Moscow" })
        );
      }

      weekDays.map((day, i) => {
        if (day === state.curDate) state.curDay = i as any;
      });
      state.weekDates = weekDays;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeek.fulfilled, (state, action) => {
      state.curWeek = action.payload;
      state.switchWeek = action.payload;
    });
  },
});

export const { setCurWeek, setSwitchWeek, setHideSwitch, setCurDayAndWeek } =
  scheduleSettingsSlice.actions;
export default scheduleSettingsSlice.reducer;
