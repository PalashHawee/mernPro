import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";
import Card from "../../shared/components/UIElements/Card";
const UsersList = (props) => {
  //Finding if any users available
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found!</h2>
        </Card>
      </div>
    );
  }
  //If user available then map it and display from User Item comp
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};
export default UsersList;
