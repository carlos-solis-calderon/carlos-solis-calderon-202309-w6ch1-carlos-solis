import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CallState = {
  isCalling: boolean;
};

const initialState: CallState = {
  isCalling: false,
};

const callSlice = createSlice({
  name: 'call',
  initialState,
  reducers: {
    phoneStatus: (state, action: PayloadAction<CallState>) => {
      console.log(state);
      return action.payload;
    },
  },
});

export default callSlice.reducer;
export const { phoneStatus } = callSlice.actions;
