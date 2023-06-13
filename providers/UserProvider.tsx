"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
