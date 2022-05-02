import './Result.css';
import React from 'react';
import { card } from '../types/card';
import { filter } from '../types/filter';

interface IProps {
  cards: card[];
  filter: filter;
  selected: card | null;
  hide: () => void;
}

export default function Result(props: IProps) {
  const handleClickOverlay = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      props.hide();
    }
  };

  const pick = (length: number, amount: number): number[] => {
    const result: number[] = [];
    if (length < amount) return result;

    while (result.length < amount) {
      const randomNumber = Math.floor(Math.random() * length);
      if (!result.includes(randomNumber)) {
        result.push(randomNumber);
      }
    }
    return result;
  };

  const makeElement = (cards: card[], indexes: number[]) => {
    return (
      <>
        {indexes.map((item, index) => (
          <img
            key={index}
            className={`random-card ${cards[item].name}`}
            src={`/cards/${cards[item].cardSet}/${cards[item].image}`}
            alt={cards[item].name}
          />
        ))}
      </>
    );
  };

  let result = <></>;

  if (props.selected?.name === '이단자 헤드라') {
    const cards = props.cards.filter((item) => {
      return (
        item.cardType === 'minion' &&
        item.cost === props.filter.cost &&
        !item.keywords.includes('colossal')
      );
    });
    const indexes = pick(cards.length, 1);
    result = makeElement(cards, indexes);
  } else if (props.selected?.name === '주문 나가') {
    const cards = props.cards.filter((item) => {
      return (
        item.class === 'mage' &&
        item.cardType === 'spell' &&
        !item.keywords.includes('questline')
      );
    });
    const indexes = pick(cards.length, 3);
    result = makeElement(cards, indexes);
  } else if (props.selected?.name === '아즈샤라 두루마리') {
    const fireCards = props.cards.filter((item) => {
      return (
        item.class === 'shaman' &&
        item.cardType === 'spell' &&
        item.spellSchool === 'fire' &&
        !item.keywords.includes('questline')
      );
    });
    const fireIndex = pick(fireCards.length, 1);
    const fireElement = makeElement(fireCards, fireIndex);
    const frostCards = props.cards.filter((item) => {
      return (
        item.class === 'shaman' &&
        item.cardType === 'spell' &&
        item.spellSchool === 'frost' &&
        !item.keywords.includes('questline')
      );
    });
    const frostIndex = pick(frostCards.length, 1);
    const frostElement = makeElement(frostCards, frostIndex);
    const natureCards = props.cards.filter((item) => {
      return (
        item.class === 'shaman' &&
        item.cardType === 'spell' &&
        item.spellSchool === 'nature' &&
        !item.keywords.includes('questline')
      );
    });
    const natureIndex = pick(natureCards.length, 1);
    const natureElement = makeElement(natureCards, natureIndex);

    result = (
      <>
        {fireElement}
        {frostElement}
        {natureElement}
      </>
    );
    console.log(result);
  } else if (props.selected?.name === '진아즈샤리의 불바다') {
    const cards = props.cards.filter((item) => {
      return item.cost >= 5 && item.cardType === 'minion';
    });
    const indexes = pick(cards.length, 13);
    result = makeElement(cards, indexes);
  } else if (props.selected?.name === '사절 페이린') {
    const cards = props.cards.filter((item) => {
      return item.keywords.includes('colossal');
    });
    const indexes = pick(cards.length, 3);
    result = makeElement(cards, indexes);
  } else if (props.selected?.name === '모선') {
    const cards = props.cards.filter((item) => {
      return (
        item.cost <= 3 &&
        item.cardType === 'minion' &&
        item.minionType === 'mech' &&
        !item.keywords.includes('colossal')
      );
    });
    const indexes = pick(cards.length, 2);
    result = makeElement(cards, indexes);
  }

  const content = (
    <div className="modal-overlay" onClick={handleClickOverlay}>
      <div className="modal-wrapper">
        <div className="modal-content">
          <img
            className={`selected-card ${props.selected?.name}`}
            src={`/cards/${props.selected?.cardSet}/${props.selected?.image}`}
            alt={props.selected?.name}
          />
          <img className="arrow" src={'/arrow.png'} alt="arrow" />
          {result}
        </div>
      </div>
    </div>
  );

  return <div className="Result">{props.selected !== null ? content : ''}</div>;
}
