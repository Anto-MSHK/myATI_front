
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



type SubjectSliceStateT = {
  subjectName: string;
}

const initialState: SubjectSliceStateT = {
  subjectName: '',
}



const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    setSubject(state, action: PayloadAction<string>){
/*     
      console.log(action);
      console.log(state); */
      state.subjectName = action.payload.toString()
    }
  },
})




export const { setSubject } = subjectsSlice.actions 
export default subjectsSlice.reducer 