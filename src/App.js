import React, { useState } from 'react';

import { Search } from './components/Search';
import { Table } from './components/Table';
import './App.scss';
import { ModalIcon } from './components/ModalIcon/ModalIcon';
import { useTableApi } from './hooks/useTableApi';

export function App() {
  const [searchQery, setSearchQery] = useState('');
  const onSearchHendler = (cuery) => setSearchQery(cuery);
  const [modal, setModal] = useState(false);

  const [todos, api] = useTableApi('http://localhost:3004/products');

  const addTodo = ({ name, description, done }) => {
    const newAddTodo = {
      id: Date.now(),
      name,
      description,
      done,
      time: Date.now(),
    };
    api.setData([...todos, newAddTodo]);
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
