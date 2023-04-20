import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";

type pinsSliceStateT = {
  groups: string[];
  teachers: string[];
};

const initialState: pinsSliceStateT = {
  groups: [],
  teachers: [],
};

interface IPinPayLoad {
  key: string;
  item: string;
}

const pinsSlice = createSlice({
  name: "pins",
  initialState,
  reducers: {
    addPin(state, action: PayloadAction<IPinPayLoad>) {
      const key = action.payload.key;
      if (!state[key as keyof pinsSliceStateT].includes(action.payload.item)) {
        state[key as keyof pinsSliceStateT].unshift(action.payload.item);
      }
    },

    removePin(state, action: PayloadAction<string>) {
      const items = Object.entries(state);
      items.forEach(([key, pins]) => {
        if (pins.includes(action.payload)) {
          state[key as keyof pinsSliceStateT] = state[
            key as keyof pinsSliceStateT
          ].filter((item) => item !== action.payload);
        }
      });
      /*  if (state[key as keyof pinsSliceStateT].includes(action.payload.item)) {
               
                state[key as keyof pinsSliceStateT] = state[key as keyof pinsSliceStateT].filter(item => item !== action.payload.key)
                console.log('item removed');
                console.log(state[key as keyof pinsSliceStateT]);
            } */
    },
  },
});

export const { addPin, removePin } = pinsSlice.actions;
export default pinsSlice.reducer;
