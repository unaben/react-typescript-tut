import React from "react";
import { List } from "./List";

const DisplayList = () => {
  return (
    <div>
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          {
            id: 1,
            firstName: "Bruce",
            lastName: "Wayne",
          },
          {
            id: 2,
            firstName: "Warnar",
            lastName: "Young",
          },
          {
            id: 3,
            firstName: "Alana",
            lastName: "Smith",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};
export default DisplayList;
