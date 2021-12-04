import { createReducer } from '@reduxjs/toolkit';
import { setOrderStatus } from './order-actions';
import { orderInitialState } from './order-initial-state';

const orderReducer = createReducer(orderInitialState, (build) => {
  build
    .addCase(setOrderStatus, (state, action) => {
      state.status = action.payload.status;
    });
});

export { orderReducer };
