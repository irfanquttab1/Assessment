import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    rememberme: false,
    uid: '',
  },
  reducers: {
    dispatchRememberMe(state, action) {
      state.rememberme = action.payload;
    },
    dispatchUid(state, action) {
      state.uid = action.payload;
    },
  },
});

export const {dispatchRememberMe, dispatchUid} = todosSlice.actions;
export default todosSlice.reducer;
