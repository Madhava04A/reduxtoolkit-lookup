import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    console.log(users);
  }, []);
  return (
    <div>
      <h2>List of Users</h2>
      {users.loading && <div>loading...</div>}
      {!users.loading && users.error ? <div>Error : {users.error}</div> : null}
      {!users.loading && users.data.length ? (
        <ul>
          {users.data.map((user) => {
            return <li key={user.id}>{user.id}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
