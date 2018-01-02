import {
  shuffle,
  take,
  orderBy
} from 'lodash';

const getAllDinos = dinos =>
  Object.keys(dinos.items)
  .filter(dinoId => dinos.items[dinoId].display !== false)
  .map(dinoId => dinos.items[dinoId])
  .map(dino => {
    return {
      ...dino,
      itemId: dino.dinoId,
    }
  });

const getAllDinosAlphabeticallySorted = dinos =>
  orderBy(getAllDinos(dinos), [dino => dino.name.toLowerCase()], ['asc']);

const getRandomDinos = dinos => count => {
  const randomDinos = shuffle(getAllDinos(dinos));
  return take(randomDinos, count);
};

const getDinoById = state => dinoId => {
  const dino = state.items[dinoId];
  if (!dino) {
    return;
  }

  return {
    ...dino,
    foo: "bar",
    itemId: dino.dinoId,
  }
};

const isFetching = dinos => dinos.isFetching;

export {
  getAllDinosAlphabeticallySorted,
  getRandomDinos,
  getDinoById,
  isFetching,
};