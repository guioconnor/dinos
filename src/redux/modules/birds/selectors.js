import {
  shuffle,
  take,
  orderBy
} from 'lodash';

export const getAllBirds = (state) => {
  return Object.keys(state)
    .map(birdId => state[birdId])
    .map(bird => {
      return {
        ...bird,
        itemId: bird.birdId,
      }
    });
};

export const getAllBirdsAlphabeticallySorted = birds =>
  orderBy(getAllBirds(birds), [bird => bird.name.toLowerCase()], ['asc']);

export const getRandomBirds = bird => count => {
  const randombirds = shuffle(getAllBirds(bird));
  return take(randombirds, count);
};

export const getBirdById = (state, birdId) => {
  if (!state[birdId]) {
    return;
  }
};