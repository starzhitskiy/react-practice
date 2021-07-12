import React, { useState } from 'react';

import { Search } from './components/Search';
import { Table } from './components/Table';

import './App.scss';
import { ModalIcon } from './components/ModalIcon/ModalIcon';
import todosFromServer from './users.json';
// import { check } from 'prettier';

export function App() {
  const [searchQery, setSearchQery] = useState('');
  const [todos, setTodos] = useState(todosFromServer);
  const onSearchHendler = (cuery) => setSearchQery(cuery);
  const [modal, setModal] = useState({ modal: false });

  const addTodo = (name, description, done) => {
    const newAddTodo = {
      id: Date.now(),
      name,
      description,
      done,
      time: Date.now(),
    };
    setTodos([...todos, newAddTodo]);
  };

  return (
    <>
      <div className="buttons">
        <Search onSearchHendler={onSearchHendler} />
        <button
          className="buttons__modal"
          onClick={() => setModal({ ...modal, modal: true })}
          type="button"
        >
          Open modal
        </button>
      </div>
      <Table query={searchQery} todos={todos} />
      <ModalIcon
        addTodo={addTodo}
        title="Add new item"
        isOpened={modal.modal}
        onModalClose={() => setModal({ ...modal, modal: false })}
      />
    </>
  );
}
