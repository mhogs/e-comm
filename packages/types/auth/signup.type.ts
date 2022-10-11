import { UserType } from "./user.type";

export interface SignUpResponseType {
  token?: string;
  refrech?: string;
  user?: UserType;
}
export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}
