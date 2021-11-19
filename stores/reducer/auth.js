const initialState = {
  id: "",
  isError: false,
  isLoading: false,
  msg: "",
};

const auth = (state = initialState, action) => {
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
        msg: action.payload.data.msg,
      };
    }
    case "REGISTER_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        id: "",
        msg: action.payload.response.data.msg,
      };
    }
  }
};
