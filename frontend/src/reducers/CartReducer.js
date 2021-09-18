import { CART_ADD } from "../Actions/types";

const intitalState = {
  restaurantName: "",
  items: [],
};
export default (state = intitalState, action) => {
  const { restaurantName } = state;
  switch (action.type) {
    case CART_ADD:
      if (action.payload.restaurantName !== restaurantName) {
        return {
          restaurantName: action.payload.restaurantName,
          items: [action.payload.itemDetails],
        };
      }
      state.items.push(action.payload.itemDetails);
      return {
        ...state,
        restaurantName: action.payload.restaurantName,
      };
    default:
      return state;
  }
};
