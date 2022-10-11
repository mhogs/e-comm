import { CurrentUserType, UserType } from "types";

export function getUserFromStorage() {
  if (typeof document !== undefined) {
    const user_str = localStorage.getItem("user");
    if (user_str === null) return null;
    return JSON.parse(user_str) as CurrentUserType;
  } else {
    /** use react native async storage  */
  }
}
export function saveUserToStorage(user: UserType) {
  if (typeof document !== undefined) {
    const user_str = localStorage.setItem("current", JSON.stringify(user));
  } else {
    /** use react native async storage  */
  }
}
