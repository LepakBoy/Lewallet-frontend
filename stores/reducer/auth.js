const initialState = {
  id: "",
  pin: "",
  isError: false,
  isLoading: false,
  msg: "",
};

const authLogin = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: true,
        msg: "",
      };
    }
    case "LOGIN_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        id: action.payload.data.data.id,
        pin: action.payload.data.data.pin,
        msg: action.payload.data.msg,
      };
    }
    case "LOGIN_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        id: "",
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default authLogin;
