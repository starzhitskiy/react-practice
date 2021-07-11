import React, { useState } from 'react';

import './Search.scss';

export function Search({ onSearchHendler }) {
  const [input, setInput] = useState('');

  return (
    <>
      <label htmlFor="byName">
        <h1 className="title">Search by Name</h1>
        <input
          className="title__search"
          type="search"
          id="byName"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </label>
      <button className="title__button" type="button" onClick={() => onSearchHendler(input)}>
        Filter Name
      </button>
    </>
  );
}
