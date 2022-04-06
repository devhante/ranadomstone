import './Filter.css';
import React from 'react';

export default function Filter() {
  return (
    <div className="Filter">
      <div className="item firebrick">불모의 땅</div>
      <div className="item royalblue">스톰윈드</div>
      <div className="item paleturquoise">알터랙 계곡</div>
      <div className="item mediumaquamarine">가라앉은 도시로의 항해</div>
      <div className="space" />
      <div className="dropdown">
        <div className="label">직업</div>
        <select>
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
        <select>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="0">3</option>
          <option value="1">4</option>
          <option value="2">5</option>
          <option value="0">6</option>
          <option value="1">7</option>
          <option value="2">8</option>
          <option value="0">9</option>
          <option value="1">10</option>
        </select>
      </div>
    </div>
  );
}
