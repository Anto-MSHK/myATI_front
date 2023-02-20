
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type pinsSliceStateT = {
    groups: string[],
    teachers: string[]
}

const initialState: pinsSliceStateT = {
    groups: [],
    teachers: [],
}

interface IPinPayLoad {
    key: string
    item: string
}



const pinsSlice = createSlice({
    name: 'pins',
    initialState,
    reducers: {
        addPin(state, action: PayloadAction<IPinPayLoad>) {
            const key = action.payload.key
            if (!state[key as keyof pinsSliceStateT].includes(action.payload.item)) {
                state[key as keyof pinsSliceStateT].push(action.payload.item)
            }
        },

        removePin(state, action: PayloadAction<string>) {
            if (state.groups.includes(action.payload)) {
                state.groups = state.groups.filter(item => item != action.payload)
            }
            if (state.teachers.includes(action.payload)) {
                state.teachers = state.teachers.filter(item => item != action.payload)
            }
        }
    },
})

export const { addPin, removePin } = pinsSlice.actions
export default pinsSlice.reducer 