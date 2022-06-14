import { useState, createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  users: AuthUser | null;
  setUsers: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [users, setUsers] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
