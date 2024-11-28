import { SettingProvider } from "./SettingProvider";

export const AuthLayout = ({ children }:never) => {
  return <SettingProvider>{children}</SettingProvider>;
};
