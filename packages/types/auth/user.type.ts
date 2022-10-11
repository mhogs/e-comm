export interface UserType {
  name: string;
  email: string;
}

export type CurrentUserType = UserType | null;
