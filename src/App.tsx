import React from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Context from "./components/Context";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { Private } from "./components/auth/Private";
import Profile from "./components/state/Profile";
import DisplayList from "./components/generic/DisplayList";
import Combination from "./components/templateLiterals/Combination";
import RandomNumData from "./components/restriction/RandomNumData";

function App() {
  const personName = {
    firstName: "Steven",
    lastName: "Rico",
  };

  const nameList = [
    {
      firstName: "Jayjay",
      lastName: "Okocha",
    },
    {
      firstName: "Dolly",
      lastName: "Patra",
    },
    {
      firstName: "Andrew",
      lastName: "Ward",
    },
  ];
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBottom: 40,
          marginTop: 20,
          textDecoration: "underline",
          transform: "capitalize",
        }}
      >
        React - Typescript Tutotial
      </h1>
      <div className="App">
        <div>
          <Context />
          <Greet name="Nathan" messageCount={20} isLoggedin={false} />
          <Greet name="Nathan" isLoggedin={false} />
          <Person name={personName} />
          <PersonList names={nameList} />
          <Status status="loading" />
          <Heading> Placeholder text</Heading>
          <Oscar>
            <Heading>Oscar goes to programming school!</Heading>
          </Oscar>
          <Button
            handleClick={(event, id) => {
              console.log("Button clicked!", event, id);
            }}
          />

          <Input value="" handleChange={(event) => console.log(event)} />
          <Container styles={{ border: "1px solid black", padding: "1rem" }} />
          <Private isLoggedIn={true} component={Profile} />
          <Counter />
          <DisplayList />
          <Combination />
          <RandomNumData />
          <ThemeContextProvider>
            <Box />
          </ThemeContextProvider>
        </div>
        <UserContextProvider>
          <div className="user">
            <User />
          </div>
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
