// Selectors
export const getAllAnimals = (state) => {
  return Object.keys(state)
    .map(animalId => state[animalId])
    .map(animalImageMiddleware);
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