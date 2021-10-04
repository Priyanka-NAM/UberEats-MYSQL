import { CART_ADD } from "../Actions/types";

const intitalState = {
  restaurantName: "",
  restaurnatId: -1,
  items: [],
};
export default (state = intitalState, action) => {
  const { restaurantName } = state;
  switch (action.type) {
    case CART_ADD:
      if (action.payload.restaurantName !== restaurantName) {
        return {
          restaurantName: action.payload.restaurantName,
          restaurantId: action.payload.restaurantId,
          items: [action.payload.itemDetails],
        };
      }
      state.items.push(action.payload.itemDetails);
      return {
        ...state,
        restaurantName: action.payload.restaurantName,
        restaurantId: action.payload.restaurantId,
      };
    default:
      return state;
  }
};
