import { FC, createContext} from "react";
import DisplayContext from "./DisplayContext";

interface ContextInterface {
  name: string;
  age: number;
  country: string;
}

export const InterfaceContext = createContext<ContextInterface>(
  {} as ContextInterface
);

const Context: FC = () => {
  const contextValue: ContextInterface = {
    name: "Nathan",
    age: 32,
    country: "South-Africa",
  };
  return (
    <InterfaceContext.Provider value={contextValue}>
      <DisplayContext />
    </InterfaceContext.Provider>
  );
};
export default Context;
