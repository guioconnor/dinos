import { animalImageMiddleware } from '../../../assets/animalImage';
import { shuffle, take, orderBy } from 'lodash';

export const getAllAnimals = (state) => {
  return Object.keys(state)
    .map(animalId => state[animalId])
    .map(animal => {
      return {
        ...animal,
        itemId: animal.animalId,
      }
    })
    .map(animalImageMiddleware);
};

export const getAllAnimalsAlphabeticallySorted = animals =>
  orderBy(getAllAnimals(animals), [animal => animal.name.toLowerCase()], ['asc']);

export const getRandomAnimals = animal => count => {
  const randomAnimals = shuffle(getAllAnimals(animal));
  return take(randomAnimals, count);
};

export const getAnimalByDifficultyLevel = (state, level) => {
  return getAllAnimals.filter(animalId => (state[animalId].difficulty === level));
}

export const getAnimalById = (state, animalId) => {
  if (!state[animalId]) {
    return;
  }
  return animalImageMiddleware(state[animalId]);
};