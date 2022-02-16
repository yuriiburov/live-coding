import React from 'react';
import User from './User';

// input: array of users
// output: jsx

const UsersList = (props) => {
  return (
    <ul className="users">
      {props.users.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </ul>
  );
};

export default UsersList;
