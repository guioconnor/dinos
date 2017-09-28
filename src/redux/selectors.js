import { randomise, head } from "../lib/arrayHelpers";

const getDinosAlphabeticallySorted = dinos => {
  return dinos.sort(
    (d1, d2) => (d1.name.toLowerCase() > d2.name.toLowerCase() ? 1 : -1)
  );
};

const getFilteredDinos = dinos => filters => {
  if (Object.keys(filters).length === 0) {
    return dinos;
  }
  return Object.keys(filters).reduce((dinos, filterName) => {
    if (!filters[filterName]) {
      return dinos;
    }
    return dinos.filter(d => d[filterName] === filters[filterName]);
  }, getDinosAlphabeticallySorted(dinos));
};

const getRandomDinos = dinos => count => {
  const randomDinos = randomise(dinos);
  return head(randomDinos, count);
};

export { getDinosAlphabeticallySorted, getFilteredDinos, getRandomDinos };
