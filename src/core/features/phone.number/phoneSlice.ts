import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PhoneState = {
  phoneNumber: string;
};

const initialState: PhoneState = {
  phoneNumber: '',
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PhoneState>) => {
      console.log(state);
      return action.payload;
    },
    erase: (state) => {
      console.log(state);
      return initialState;
    },
  },
});

export default phoneSlice.reducer;
export const { add, erase } = phoneSlice.actions;
