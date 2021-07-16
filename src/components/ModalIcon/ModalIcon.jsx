import React from 'react';

import { Forma } from '../Forma';
import './ModalIcon.scss';
// eslint-disable-next-line
export const ModalIcon = (props) => {
  // const addTodo = (value) => {
  //   props.addTodo({ ...value });
  // };

  return (
    <>
      <div className={`modal ${props.isOpened ? 'open' : 'close'}`}>
        <div className="modal__body">
          <div className="modal__close" onClick={props.onModalClose} role="presentation">
            X
          </div>
          <h2>{props.title}</h2>
          <hr />
          <Forma />
          <button
            className="title__button modal__button"
            type="submit"
            onClick={props.onModalClose}
          >
            Add new information
          </button>
        </div>
      </div>
    </>
  );
};
