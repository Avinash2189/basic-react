import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/Avinash2189")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <h4 className="bg-gray-400 text-white">
        Git hub Followers: {data.login}
      </h4>
    </>
  );
};

export default Github;
