import React from "react";
import { Name } from "./Person.types";

// type PersonListProps = {
//   names: {
//     firstName: string;
//     lastName: string;
//   }[];

type PersonListProps = {
  names: Name[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <>
            <p key={name.firstName}>
              Firstname: {name.firstName} Lastname: {name.lastName}
            </p>
          </>
        );
      })}
    </div>
  );
}
