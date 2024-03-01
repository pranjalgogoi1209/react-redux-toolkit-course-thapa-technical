import React from "react";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";

export default function UserDetails() {
  const dispatch = useDispatch();
  const addNewUser = name => {
    dispatch(dispatch(addUser(name)));
  };

  return (
    <div>
      <button onClick={() => addNewUser(fakeUserData())}>Add User</button>
      <ul>
        <li>user1</li>
        <li>user2</li>
      </ul>
      <button>Clear All Users</button>
    </div>
  );
}
