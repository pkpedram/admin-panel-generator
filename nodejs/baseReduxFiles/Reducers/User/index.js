
const initialState = {
  userData: {},
  isLogin: false,
  profileInfo: {},
  identity: {
    identityStep: 0,
  },
};

export default function userState(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {

   
    case "USER_IS_LOGIN":
      return {
        ...state,
        isLogin: payload.isLogin,
      };

    case "/api/accounts/profile/":
      return{
        ...state,
        profileInfo: payload
      }
    case "SET_IDENTITY_STEP":
      return {
        ...state,
        identity: {
          ...state.identity,
          identityStep: state.identity.identityStep + payload,
        },
      };


    default:
      return state;
  }
}
