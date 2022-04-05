import './CardList.css';
import React from 'react';
import { card } from '../types/card';

interface IProps {
  cards: card[];
}

export default function CardList(props: IProps) {
  const cardElements = props.cards.map((item, index) => <img key={index} src={`/cards/${item.cardSet}/${item.image}`} alt={item.name} />);

  console.log(cardElements);

  return <div className="CardList">{cardElements}</div>;
}
