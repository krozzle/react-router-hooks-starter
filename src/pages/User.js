import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { firstName, lastName } = useParams();
  return (
    <div>
      User {firstName} {lastName}
    </div>
  );
};

export default User;

// ! Before hooks
// function User(match) {
//   return <div>User {match.params.name}</div>;
// }
