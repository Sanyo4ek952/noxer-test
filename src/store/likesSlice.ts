import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface LikesState {
  likedIds: number[];
}

const initialState: LikesState = {
  likedIds: [],
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.likedIds.includes(id)) {
        state.likedIds = state.likedIds.filter((i) => i !== id);
      } else {
        state.likedIds.push(id);
      }
    },
    setLikes(state, action: PayloadAction<number[]>) {
      state.likedIds = action.payload;
    },
  },
});

export const { toggleLike, setLikes } = likesSlice.actions;
export default likesSlice.reducer;
