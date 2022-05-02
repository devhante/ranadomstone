import './CardList.css';
import React from 'react';
import { card } from '../types/card';
import { filter } from '../types/filter';

interface IProps {
  cards: card[];
  setSelected: (value: card | null) => void;
}

export default function CardList(props: IProps) {
  const randomCards = props.cards.filter((item) => {
    return (
      item.keywords.includes('discover') || item.keywords.includes('random')
    );
  });

  const cardElements = randomCards.map((item, index) => (
    <img
      key={index}
      className={`random-card ${item.name}`}
      src={`/cards/${item.cardSet}/${item.image}`}
      alt={item.name}
      onClick={() => props.setSelected(item)}
    />
  ));

  return <div className="CardList">{cardElements}</div>;
}
