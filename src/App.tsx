import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { card } from './types/card';

export default function App() {
  const cardData = require('./Cards.json');
  const [cards, setCards] = useState<card[]>(JSON.parse(JSON.stringify(cardData)) as card[]);
  const [filter, setFilter] = useState<string>('None');

  return (
    <div className="App">
      <Header />
      <Content cards={cards} />
    </div>
  );
}
