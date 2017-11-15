import React from 'react';
import shallow from 'enzyme';
import { uniqBy } from 'lodash';

import { getAnimalsWithUniqueInitials } from './selectors';
import data from '../../../data/animalsData';

describe('Animals redux selectors', () => {
  describe('getAnimalsWithUniqueInitials', () => {
    it('should return a list of animals with unique initials', () => {
      const actual = getAnimalsWithUniqueInitials(data)(8);
      const repetitions = 10;

      for (var i = 0; i < repetitions; i++) {
        expect(actual.length).toEqual(8);
        expect(uniqBy(actual.map(animal => animal.name.charAt(0))).length).toEqual(8);
      }
    })
  })
});