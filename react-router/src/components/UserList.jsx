import React from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const userIds = [1, 2, 3]; // or fetch these dynamically

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userIds.map((id) => (
          <li key={id}>
            <Link to={`/users/${id}`}>View User {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
