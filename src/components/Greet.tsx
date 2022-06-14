import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number; // the (? => optional) allows to render in App.tsx without declaring it
  isLoggedin: boolean;
};

export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h3>
        {!props.isLoggedin
          ? `Welcome ${props.name}! You have ${messageCount} uread messages`
          : "Welcome Guest"}
      </h3>
    </div>
  );
}
