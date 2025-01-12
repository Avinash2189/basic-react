import useTheme from "../contexts/Theme";
import React, { useContext, useState } from "react";

function Profile() {
  // const { userName } = useTheme();
  const { userName } = useTheme();
  console.log("hiiii", userName);
  // const [user, setUser] = useState();

  if (!userName) return <div>Please Login</div>;
  return <div>Welcome {userName}</div>;
}

export default Profile;
