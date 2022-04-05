import _ from "lodash";
import data from "./data";

export type CharacterType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};

// return one character from mock data
export const fetchCharacter = (): Promise<CharacterType> => {
  const [character] = _.shuffle(data);
  return Promise.resolve(character);
};
