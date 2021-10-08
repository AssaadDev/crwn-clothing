import { UserActionType } from "./user.types";

const fix_state = { curretUser: null };

const userReducer = (state = fix_state, action) => {
  //state = fix_state, means if state is not set, give it value of fix_state

  switch(action.type){
      case UserActionType.SET_CURRENT_USER:
          return {
              ...state,
              currentUser: action.payload
          }
          default:
              return state;
  }
};

export default userReducer;