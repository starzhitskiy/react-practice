import React from 'react';

import { Header } from '../Header';
import { Row } from '../Row';
import './Table.scss';

export function Table({ query, todos }) {
  return (
    <>
      <table>
        <Header />
        <Row query={query} todos={todos} />
      </table>
    </>
  );
}
