import React from 'react';

import './Header.scss';

export function Header() {
  return (
    <thead>
      <tr className="Header">
        <th>ID</th>
        <th>Name</th>
        <th>Time</th>
        <th>Description</th>
        <th>Done</th>
      </tr>
    </thead>
  );
}
