/* eslint-disable import/prefer-default-export */
import { CART_ADD } from "./types";

export const addToCart = (itemDetails) => (dispatch) =>
  dispatch({ type: CART_ADD, payload: itemDetails });
