import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Palash",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
