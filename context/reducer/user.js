export function user(state, action) {
    switch (action.type) {
      case "LOGGED_IN_USER":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  }

  export function user2(state, action) {
    switch (action.type) {
      case "LOGGED":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  }