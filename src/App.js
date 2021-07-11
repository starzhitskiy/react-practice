import React, { useState } from 'react';

import { Search } from './components/Search';
import { Table } from './components/Table';

export function App() {
  const [searchQery, setSearchQery] = useState('');
  const onSearchHendler = (cuery) => setSearchQery(cuery);

  return (
    <>
      <Search onSearchHendler={onSearchHendler} />
      <Table query={searchQery} />
    </>
  );
}
