
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



type teachersSliceStateT = {
  teacherName: string;
}

const initialState: teachersSliceStateT = {
  teacherName: '',
}



const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    setTeacher(state, action: PayloadAction<string>){
/*     
      console.log(action);
      console.log(state); */
      state.teacherName = action.payload.toString()
    }
  },
})




export const { setTeacher } = teachersSlice.actions 
export default teachersSlice.reducer 