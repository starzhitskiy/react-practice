import React, { useState } from 'react';

import './Row.scss';

const NewRow = ({ user }) => {
  const [check, setCheck] = useState(user.done);

  const onChenge = () => {
    setCheck(!check);
  };

  const className = `row ${check ? 'active' : ''}`;

  return (
    <tr className={className}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{new Date(user.time).toLocaleTimeString()}</td>
      <td>{user.description}</td>
      <td>
        <input className="row__check" type="checkbox" checked={check} onChange={onChenge} />
      </td>
    </tr>
  );
};

export function Row({ query, todos }) {
  // const [users] = useState(Users);
  const lowerQuery = query.toLowerCase();
  const filteredUsers = todos.filter((user) => user.name.toLowerCase().includes(lowerQuery));

  return (
    <tbody>
      {filteredUsers.map((user) => (
        <NewRow key={user.id} user={user} />
      ))}
    </tbody>
  );
}
