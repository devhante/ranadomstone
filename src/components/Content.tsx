import './Content.css';
import React from 'react';
import Filter from './Filter';
import CardList from './CardList';
import { card } from '../types/card';

interface IProps {
  cards: card[];
}

export default function Content(props: IProps) {
  return (
    <div className="Content">
      <Filter />
      <CardList cards={props.cards} />
    </div>
  );
}
