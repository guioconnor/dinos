import ReactGA from 'react-ga';

export const logFlipMemoryCard = (position) => {
  ReactGA.event({
    category: 'MemoryGame',
    action: 'FlipCard',
    value: position
  });
}

export const logFllterChange = (filterName, filter) => {
  ReactGA.event({
    category: 'Filter',
    action: filterName,
    label: filter,
  });
}

export const logPageView = (location) => {
  ReactGA.pageview(location.pathname + location.search);
}

export const logDinoLinkClick = (dinoName) => {
  ReactGA.event({
    category: 'DinoLinkClick',
    action: 'click',
    label: dinoName
  });
}

export const initializeAnalitics = (id) => {
  ReactGA.initialize('UA-107421412-1');
}
