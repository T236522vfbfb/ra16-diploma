import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../redux/index';
import { CartItemModel } from '../models/models';

export const saveCartToLocalStorage = createAsyncThunk(
    'cart/save',
    async (item: CartItemModel, { getState }) => {
      const state = getState() as RootState; 
      const cart = [...state.cart, item]; 
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  );