import {
  shuffle,
  take,
  orderBy
} from 'lodash';

export const getAllAnimals = (state) => {
  return Object.keys(state.items)
    .map(animalId => state.items[animalId])
    .map(animal => {
      return {
        ...animal,
        itemId: animal.animalId,
      }
    });
};

export const getAllAnimalsAlphabeticallySorted = animals =>
  orderBy(getAllAnimals(animals), [animal => animal.name.toLowerCase()], ['asc']);

export const getRandomAnimals = animal => count => {
  const randomAnimals = shuffle(getAllAnimals(animal));
  return take(randomAnimals, count);
};

export const getAnimalById = state => animalId => {
  const animal = state.items[animalId];
  if (!animal) {
    return;
  }

  return {
    ...animal,
    itemId: animal.animalId,
  };
};