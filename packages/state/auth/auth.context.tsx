import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMutation } from "@tanstack/react-query";
import { CurrentUserType, LoginRequestType } from "types/auth";
import { loginService, logoutService } from "../services/auth";

export type currentUserType = CurrentUserType;
type AuthContextType = {
  currentUser: currentUserType;
  setCurrentUser: Dispatch<SetStateAction<currentUserType>>;
  signin: (data: LoginRequestType) => void;
  signout: () => void;
  serverState: {
    isLoading: boolean;
  };
};

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  setCurrentUser: () => {},
  signin: (data: any) => {},
  signout: () => {},
  serverState: {
    isLoading: false,
  },
});

type AuthProviderProps = {
  children?: React.ReactNode;
};
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<currentUserType>(null);
  const [loadingState, setLoadingState] = useState<boolean>(true);

  const { mutate: signin, isLoading: signing } = useMutation(loginService, {
    onSuccess: (data) => {
      setCurrentUser((prev: any) => ({ ...prev, ...data }));
    },
    onError: (err: any) => {},
  });
  const { mutate: signout, isLoading: signing_out } = useMutation(
    logoutService,
    {
      onSuccess: () => {
        setCurrentUser(null);
      },
      onError: (err: any) => {},
    }
  );

  const contextValue = {
    currentUser,
    setCurrentUser,
    serverState: {
      isLoading: signing || signing_out,
    },
    signin,
    signout,
  };

  useEffect(() => {
    //const user = getUserFromStorage()
    if (true /*user === null*/) {
      setLoadingState(false);
      return;
    }
    setCurrentUser(null);
    setLoadingState(false);
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      {!loadingState && children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
