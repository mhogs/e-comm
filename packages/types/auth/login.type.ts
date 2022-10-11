import { UserType } from "./user.type";

export interface LoginResponseType {
  token?: string;
  refrech?: string;
  user: UserType;
}
export interface LoginRequestType {
  email: string;
  password: string;
}
