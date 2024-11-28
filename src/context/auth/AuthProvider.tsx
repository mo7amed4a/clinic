/* eslint-disable @typescript-eslint/ban-ts-comment */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useEffect,
  useState,
  Dispatch,
} from "react";
import Cookies from "js-cookie";
import { useLocalStorage } from "../../hooks";
import { useRouter } from "next/router";

type AuthProvider_TP = {
  children: ReactNode;
};
type AuthContext_TP = {
  user: unknown;
  login: (data: never) => void;
  logout: () => void;
  setUser: Dispatch<never>;
};

const AuthContext = createContext<AuthContext_TP>(
  null as unknown as AuthContext_TP
);

export const AuthProvider = ({ children }: AuthProvider_TP) => {
  const [user, setUser] = useLocalStorage<unknown>("user", null);
  const router = useRouter();
  const login = useCallback(
    async (data: unknown) => {
      if (setUser) setUser(data);
    },
    [setUser]
  );

  const logout = useCallback(async () => {
    Cookies.remove("token");
    if (setUser) setUser(null);
    //@ts-ignore
    router.push("/", { replace: true });
  }, [setUser]);

  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
    }),
    [login, logout, user, setUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
