import expect from 'expect';
import {authorsFormattedDropDown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedDropDown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scotty-allen', firstName: 'Scotty', lastName: 'Allen'}
      ];
      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scotty-allen', text: 'Scotty Allen'}
      ];
      expect(authorsFormattedDropDown(authors)).toEqual(expected);
    });
  });
});
