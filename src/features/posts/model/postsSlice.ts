import { RootState } from "@/store/store";
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
    setSelectedPostId: (state, action: PayloadAction<number | null>) => {
      state.selectedPostId = action.payload;
    },
  },
});

export const { setSelectedPostId } = postsSlice.actions;

export const selectSelectedPostId = (state:RootState) => state.posts.selectedPostId
  

export default postsSlice.reducer;
