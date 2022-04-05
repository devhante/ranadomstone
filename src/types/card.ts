export type card = {
  name: string;
  cardSet: 'barrens' | 'stormwind' | 'alterac' | 'sunkencity';
  class:
    | 'demonhunter'
    | 'druid'
    | 'hunter'
    | 'mage'
    | 'paladin'
    | 'priest'
    | 'rogue'
    | 'shaman'
    | 'warlock'
    | 'warrior'
    | 'neutral';
  cost: number;
  attack: number;
  health: number;
  cardType: 'hero' | 'minion' | 'spell' | 'weapon';
  minionType:
    | 'none'
    | 'all'
    | 'beast'
    | 'demon'
    | 'dragon'
    | 'elemental'
    | 'mech'
    | 'murloc'
    | 'naga'
    | 'pirate'
    | 'quilboar';
  spellSchool:
    | 'none'
    | 'arcane'
    | 'fire'
    | 'frost'
    | 'nature'
    | 'holy'
    | 'shadow'
    | 'fel';
  rarity: 'free' | 'common' | 'rare' | 'epic' | 'legendary';
  keywords: string[];
  image: string;
};
