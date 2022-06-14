import React, { useState } from "react";
type AuthProfile = {
  name: string;
  email: string;
};
export default function Profile() {
  const [profile, setProfile] = useState<AuthProfile>({} as AuthProfile);

  const handleLogin = () => {
    setProfile({
      name: "Nathan",
      email: "nathan@king.com",
    });
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {profile.name}</div>
      <div>User email is {profile.email} </div>
    </>
  );
}
