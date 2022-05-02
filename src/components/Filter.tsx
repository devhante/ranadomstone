import './Filter.css';
import React from 'react';
import { cardClass, filter } from '../types/filter';

interface IProps {
  filter: filter;
  setFilter: (value: filter) => void;
}

export default function Filter(props: IProps) {
  function isClass(value: string): value is cardClass {
    return (
      value === 'demonhunter' ||
      value === 'druid' ||
      value === 'hunter' ||
      value === 'mage' ||
      value === 'paladin' ||
      value === 'priest' ||
      value === 'rogue' ||
      value === 'shaman' ||
      value === 'warlock' ||
      value === 'warrior' ||
      value === 'neutral'
    );
  }

  const handleChangeClass = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (isClass(value)) {
      const filter: filter = {
        class: value,
        cost: props.filter.cost
      };
      props.setFilter(filter);
    }
  };
  const handleChangeCost = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +event.target.value;
    const filter: filter = {
      class: props.filter.class,
      cost: value
    };
    props.setFilter(filter);
  };

  return (
    <div className="Filter">
      <div className="item firebrick">불모의 땅</div>
      <div className="item royalblue">스톰윈드</div>
      <div className="item paleturquoise">알터랙 계곡</div>
      <div className="item mediumaquamarine">가라앉은 도시로의 항해</div>
      <div className="space" />
      <div className="dropdown">
        <div className="label">직업</div>
        <select onChange={(event) => handleChangeClass(event)}>
          <option value="demonhunter">악마사냥꾼</option>
          <option value="druid">드루이드</option>
          <option value="hunter">사냥꾼</option>
          <option value="mage">마법사</option>
          <option value="paladin">성기사</option>
          <option value="priest">사제</option>
          <option value="rogue">도적</option>
          <option value="shaman">주술사</option>
          <option value="warlock">흑마법사</option>
          <option value="warrior">전사</option>
        </select>
      </div>
      <div className="dropdown">
        <div className="label">비용</div>
        <select onChange={(event) => handleChangeCost(event)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
}
