import { getDinosAlphabeticallySorted } from './modules/dinos/selectors';

const getFilteredDinos = (state) => {
  const dinos = getDinosAlphabeticallySorted(state.dinos);
  const filters = state.filters;
  if (Object.keys(filters).length === 0) {
    return dinos;
  }
  return Object.keys(filters).reduce((dinos, filterName) => {
    if (!filters[filterName]) {
      return dinos;
    }
    return dinos.filter(d => d[filterName] === filters[filterName]);
  }, dinos);
};


export { getFilteredDinos };
