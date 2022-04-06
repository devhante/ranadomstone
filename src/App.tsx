import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Result from './components/Result';
import { card } from './types/card';

export default function App() {
  const cardData = require('./Cards.json');
  const [cards] = useState<card[]>(
    JSON.parse(JSON.stringify(cardData)) as card[]
  );
  // const [filter, setFilter] = useState<string>('None');
  const [selected, setSelected] = useState<card | null>(null);

  const hide = () => {
    setSelected(null);
  };

  return (
    <div className="App">
      <Header />
      <Content cards={cards} setSelected={setSelected} />
      <Result cards={cards} selected={selected} hide={hide} />
    </div>
  );
}
