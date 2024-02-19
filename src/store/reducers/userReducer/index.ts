import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../../shared/types/UserType';

interface ProductState {
  users: UserType[];
}

const initialState: ProductState = {
  users: [],
};

export const counterSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUsersAction: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersAction } = counterSlice.actions;

export default counterSlice.reducer;
