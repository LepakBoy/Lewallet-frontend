const initialState = {
  user: {},
};

const getUserById = (state = initialState, action) => {
  switch (action.type) {
    case "GETUSERBYID_PENDING": {
      return {
        ...state,
      };
    }
    case "GETUSERBYID_FULFILLED": {
      return {
        ...state,
        user: action.payload.data.data,
      };
    }
    case "GETUSERBYID_REJECTED": {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default getUserById;
