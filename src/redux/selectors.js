const getDinosFilteredBy = state => filter => {
  if (!filter) {
    return state.dinos;
  }
  return state.dinos.filter(d => d[filter.key] === filter.value);
};

const getdinosAlphabeticallySorted = state => {
  return state.dinos.sort((d1, d2) => (d1.name > d2.name ? 1 : -1));
};

export { getDinosFilteredBy, getdinosAlphabeticallySorted };
