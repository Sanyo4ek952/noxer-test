import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../type/type.ts";

interface InitialState {
  likedIds: number[];
  products: Product[];
}

const initialState: InitialState = {
  likedIds: [],
  products: [],
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
    setProduct(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    toggleProduct(state, action: PayloadAction<Product>) {
      const id = action.payload.Product_ID;
      const exists = state.products.some(
        (product) => product.Product_ID === id
      );

      if (exists) {
        // Убираем из массива
        state.products = state.products.filter(
          (product) => product.Product_ID !== id
        );
      } else {
        // Добавляем в массив
        state.products.push(action.payload);
      }
    },
  },
});

export const { toggleLike, setLikes, setProduct, toggleProduct } =
  likesSlice.actions;
export default likesSlice.reducer;
