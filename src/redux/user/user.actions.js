import { UserActionType } from "./user.types"

export const setCurrntUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
})