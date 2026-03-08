import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UsersState {
  selectedUserId: number | null;
}

const initialState: UsersState = {
  selectedUserId: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUserId: (state, action: PayloadAction<number | null>) => {
      state.selectedUserId = action.payload;
    },
  },
});

export const { setSelectedUserId } = usersSlice.actions;

export default usersSlice.reducer;
