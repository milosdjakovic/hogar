import { createStore } from 'redux';

const initalState = {
  initialPageLoad: false,
  currentMenu: [],
  mobileMenuVisible: false,
  menuItemInViewport: null,
  pageTransitionDuration: 300
}

function reducer(state = initalState, action) {
  switch (action.type) {
    case "SET_INITIAL_PAGE_LOADED":
      return {
        ...state,
        initialPageLoad: action.payload,
      }

    case "SET_CURRENT_MENU":
      return {
        ...state,
        currentMenu: action.payload
      }

    case "SET_STORE_INFO":
      return {
        ...state,
        storeInfo: action.payload
      }

    case "TOGGLE_MOBILE_MENU":
      return {
        ...state,
        mobileMenuVisible: action.payload,
      }

    case "SET_MENU_ITEM_IN_VIEWPORT":
      return {
        ...state,
        menuItemInViewport: action.payload,
      }

    default:
      return state
  }
}

export default preloadedState => {
  return createStore(reducer, preloadedState);
};