import expect from 'expect';
import * as authorActions from './authorActions';
import * as types from './actionTypes';

describe('Test AuthorsAction', () => {
  describe('load author success', () => {
    it('should create a LOAD_AUTHORS_SUCCESS action', () => {
      const authors = [
        {
          id: 'cory-house',
          firstName: 'Cory',
          lastName: 'House'
        },
        {
          id: 'scott-allen',
          firstName: 'Scott',
          lastName: 'Allen'
        },
        {
          id: 'dan-wahlin',
          firstName: 'Dan',
          lastName: 'Wahlin'
        }
      ];
      const expects = {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors
      };
      expect(authorActions.loadAuthorsSuccess(authors)).toEqual(expects);
    });
  });
});
