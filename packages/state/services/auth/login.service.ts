import { LoginRequestType, LoginResponseType } from "types/auth";

export async function loginService(
  data: LoginRequestType
): Promise<LoginResponseType> {
  return {
    token: "123",
    refrech: "321",
    user: {
      name: "hemza",
      email: "hemza@gmail.com",
    },
  };
}
