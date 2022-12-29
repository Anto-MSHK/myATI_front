import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SubjectT = {
  title: string;
  _id?: string;
};

type SimpleScheduleListStateT = {
  subjects: SubjectT[];
  loading: boolean;
  error: string | null;
};

type itemSliceState = {
  itemName: string;
};

const initialState: itemSliceState = {
  itemName: "",
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<string>) {
      /*     
      console.log(action);
      console.log(state); */
      state.itemName = action.payload.toString();
    },
  },
});

export const { setItem } = itemSlice.actions;
export default itemSlice.reducer;
