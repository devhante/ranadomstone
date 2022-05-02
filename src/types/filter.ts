export type cardClass =
  | 'demonhunter'
  | 'druid'
  | 'hunter'
  | 'mage'
  | 'paladin'
  | 'priest'
  | 'rogue'
  | 'shaman'
  | 'warlock'
  | 'warrior';

export type filter = {
  class: cardClass;
  cost: number;
};
