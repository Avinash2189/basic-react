import UserContextProvider from "./context/UserContextProvider";
import { useState } from "react";

import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Helloo in Context api.</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
