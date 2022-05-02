import './Content.css';
import React from 'react';
import Filter from './Filter';
import CardList from './CardList';
import { card } from '../types/card';
import { filter } from '../types/filter';

interface IProps {
  cards: card[];
  filter: filter;
  setFilter: (value: filter) => void;
  setSelected: (value: card | null) => void;
}

export default function Content(props: IProps) {
  return (
    <div className="Content">
      <Filter filter={props.filter} setFilter={props.setFilter} />
      <CardList cards={props.cards} setSelected={props.setSelected} />
    </div>
  );
}
