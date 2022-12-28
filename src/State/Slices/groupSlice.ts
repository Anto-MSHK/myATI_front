
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type groupSliceStateT = {
    groupName: string;
  }
  
  const initialState: groupSliceStateT = {
    groupName: '',
  }
  


const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
      setGroup(state, action: PayloadAction<string>){
  /*     
        console.log(action);
        console.log(state); */
        state.groupName = action.payload.toString()
      }
    },
  })

  export const { setGroup } = groupsSlice.actions 
export default groupsSlice.reducer 