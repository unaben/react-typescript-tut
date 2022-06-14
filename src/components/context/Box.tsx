import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.primary.text,
        height: 80,
        width: 80,
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 10,
      }}
    >
      Theme Context
    </div>
  );
};
export default Box;
