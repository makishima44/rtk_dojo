import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PostsState {
  selectedPostId: number | null;
}

const initialState: PostsState = {
  selectedPostId: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    selectedPostId: (state, action: PayloadAction<number>) => {
      state.selectedPostId = action.payload;
    },
  },
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;
