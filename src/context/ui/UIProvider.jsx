import { useReducer } from "react";
import { types } from "../../types";
import { UIContext } from "./UIContext";
import { uiReducer } from "./uiReducer";


const UI_INITIAL_STATE = {
  sidemenuOpen: false
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => dispatch({ type: types.ui_openMenu });

  const closeSideMenu = () => dispatch({ type: types.ui_clodeMenu });




  return (
    <UIContext.Provider
      value={{
        ...state,
        // Methods
        closeSideMenu,
        openSideMenu,

      }}
    >
      {children}
    </UIContext.Provider>
  );
};