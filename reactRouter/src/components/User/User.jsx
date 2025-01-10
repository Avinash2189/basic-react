import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <>
      <h1>Hi user Name {userid}</h1>
    </>
  );
};

export default User;
