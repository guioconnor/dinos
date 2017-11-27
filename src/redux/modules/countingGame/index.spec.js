import reducer, {
  SET_NUMBER,
  ACTION_ITEM,
  CHECK_NUMBER
} from './index';

describe('Counting Game Reducer', () => {
  const initialState = {
    items: [],
    number: null,
    resultFound: false
  };

  describe('When called with invalid action', () => {
    const actualState = reducer(undefined, {
      type: '@@INIT'
    });

    it('it should return the initial state', () => {
      expect(actualState).toEqual(initialState);
    })
  });

  describe('when setting the number', () => {
    const actualState = reducer(initialState, {
      type: SET_NUMBER,
      number: 12,
    });

    it('should set the number on the state and fill the items array', () => {
      const expectedState = {
        items: [
          false, false, false, false, false, false,
          false, false, false, false, false, false
        ],
        number: 12,
        resultFound: false
      };
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('When actioning an item', () => {
    const previousState = {
      items: [
        false, false, false, false, false, false,
        false, false, false, false, false, false
      ],
      number: 12,
      resultFound: false
    }

    const actualState = reducer(previousState, {
      type: ACTION_ITEM,
      item: 5,
    });

    it('should set the number on the state', () => {
      const expectedState = {
        items: [
          false, false, false, false, true, false,
          false, false, false, false, false, false
        ],
        number: 12,
        resultFound: false
      };
      expect(actualState).toEqual(expectedState);
    });
  });

  describe('CHECK_NUMBER', () => {
    const previousState = {
      items: [],
      number: 42,
      resultFound: false
    };

    describe('when number is incorrect', () => {
      const actualState = reducer(previousState, {
        type: CHECK_NUMBER,
        number: 5,
      });

      it('should not alter the state', () => {
        expect(actualState).toEqual(previousState);
      });
    })

    describe('when number is correct', () => {
      const actualState = reducer(previousState, {
        type: CHECK_NUMBER,
        number: 42,
      });
      it('should update the `resultFound` property to true', () => {
        const expectedState = {
          items: [],
          number: 42,
          resultFound: true,
        };

        expect(actualState).toEqual(expectedState);
      })
    })
  });
});