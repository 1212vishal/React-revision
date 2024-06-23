import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h1>count : {count}</h1>
      <h1>count1 : {count1}</h1>
      <h1>{name}</h1>
      <h1>Email</h1>
      <h1>Location</h1>
      <h1>Phone Number</h1>
    </div>
  );
};

export default User;
