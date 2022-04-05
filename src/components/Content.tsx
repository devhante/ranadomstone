import './Content.css';
import React from 'react';
import Filter from './Filter';
import CardList from './CardList';
import { card } from '../types/card';

interface IProps {
  cards: card[];
  setSelected: (value: card | null) => void;
}

export default function Content(props: IProps) {
  return (
    <div className="Content">
      <Filter />
      <CardList cards={props.cards} setSelected={props.setSelected} />
    </div>
  );
}
