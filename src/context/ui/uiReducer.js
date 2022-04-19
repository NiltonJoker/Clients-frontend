import { types } from "../../types";



export const uiReducer = (state, action) => {

  switch (action.type) {
    case types.ui_openMenu:
      return {
        ...state,
        sidemenuOpen: true
      };

    case types.ui_clodeMenu:
      return {
        ...state,
        sidemenuOpen: false
      };
    
    default:
      return state;
  }
  
};
