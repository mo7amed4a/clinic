import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
interface AuthProps {
  children: ReactNode;
}
export const AuthLayout = ({ children }: AuthProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
