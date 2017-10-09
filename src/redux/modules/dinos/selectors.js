import { shuffle, take } from 'lodash';

const getDinos = dinos =>
  Object.keys(dinos)
    .map(dinoId => dinos[dinoId]);

const getDinosAlphabeticallySorted = dinos =>
  getDinos(dinos)
    .sort((d1, d2) => (d1.name.toLowerCase() > d2.name.toLowerCase() ? 1 : -1));

const getRandomDinos = dinos => count => {
  const randomDinos = shuffle(getDinos(dinos));
  return take(randomDinos, count);
};

const getDinoById = dinos => dinoId => dinos[dinoId];

export { getDinosAlphabeticallySorted, getRandomDinos, getDinoById };
