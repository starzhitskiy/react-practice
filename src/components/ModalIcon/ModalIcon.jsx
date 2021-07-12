import React, { useState } from 'react';

import './ModalIcon.scss';
// eslint-disable-next-line
export const ModalIcon = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);

  return (
    <div className={`modal ${props.isOpened ? 'open' : 'close'}`}>
      <div className="modal__body">
        <div className="modal__close" onClick={props.onModalClose} role="presentation">
          X
        </div>
        <h2>{props.title}</h2>
        <hr />
        <form
          className="modal__form"
          onSubmit={(event) => {
            event.preventDefault();
            props.addTodo(name, description, done);
          }}
          action="#"
          method="POST"
        >
          <p>Enter name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <p>Enter description</p>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input type="checkbox" value={done} onChange={(event) => setDone(event.target.value)} />
          <button className="title__button" type="submit" onClick={props.onModalClose}>
            Add new information
          </button>
        </form>
      </div>
    </div>
  );
};
