import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Result from './components/Result';
import { card } from './types/card';
import { filter } from './types/filter';

export default function App() {
  const cardData = require('./Cards.json');
  const [cards] = useState<card[]>(
    JSON.parse(JSON.stringify(cardData)) as card[]
  );
  const [filter, setFilter] = useState<filter>({
    class: 'demonhunter',
    cost: 0
  });
  const [selected, setSelected] = useState<card | null>(null);

  const hide = () => {
    setSelected(null);
  };

  return (
    <div className="App">
      <Header />
      <Content
        cards={cards}
        filter={filter}
        setFilter={setFilter}
        setSelected={setSelected}
      />
      <Result cards={cards} filter={filter} selected={selected} hide={hide} />
    </div>
  );
}
