const getDinosFilteredBy = state => filter => {
  if (!filter) {
    return state;
  }
  return state.filter(d => d[filter.key] === filter.value);
};

const getdinosAlphabeticallySorted = dinos => {
  return dinos.sort(
    (d1, d2) => (d1.name.toLowerCase() > d2.name.toLowerCase() ? 1 : -1)
  );
};

const getDinosFilteredByDiet = state => diet => {
  const filtereDinos = diet ? state.filter(d => d.diet === diet) : state;
  return getdinosAlphabeticallySorted(filtereDinos);
};

export { getdinosAlphabeticallySorted, getDinosFilteredByDiet };
