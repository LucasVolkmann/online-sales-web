import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderType } from '../../../shared/types/OrderType';

interface OrderState {
  orders: OrderType[];
  detailedOrder?: OrderType;
}

const initialState: OrderState = {
  orders: [],
  detailedOrder: undefined,
};

export const counterSlice = createSlice({
  name: 'orderReducer',
  initialState,
  reducers: {
    setOrdersAction: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload;
    },
    setDetailedOrderAction: (state, action: PayloadAction<OrderType>) => {
      state.detailedOrder = action.payload;
    },
  },
});

export const { setOrdersAction, setDetailedOrderAction } = counterSlice.actions;

export default counterSlice.reducer;
