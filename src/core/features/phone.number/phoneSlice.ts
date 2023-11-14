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
    create: (state, action: PayloadAction<PhoneState>) => {
      console.log(state);
      return action.payload;
    },
    remove: (state) => {
      console.log(state);
      return initialState;
    },
  },
});

export default phoneSlice.reducer;
export const { create, remove } = phoneSlice.actions;
