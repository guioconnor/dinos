import { shuffle, take, orderBy } from 'lodash';

const getAllDinos = dinos =>
  Object.keys(dinos)
    .map(dinoId => dinos[dinoId]);

const getAllDinosAlphabeticallySorted = dinos =>
  orderBy(getAllDinos(dinos), [dino => dino.name.toLowerCase()], ['asc']);

const getRandomDinos = dinos => count => {
  const randomDinos = shuffle(getAllDinos(dinos));
  return take(randomDinos, count);
};

const getDinoById = dinos => dinoId => dinos[dinoId];

export { getAllDinosAlphabeticallySorted, getRandomDinos, getDinoById };
