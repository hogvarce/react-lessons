import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManagerCoursePage} from './ManagerCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };

    const wrapper = mount(<ManagerCoursePage {...props} />);
    const saveButton = wrapper.find('input.btn-primary');
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });

  it('sets error message when trying to save empty author', () => {
    const props = {
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}},
      course: {id: '1', watchHref: '', title: 'asdasd', authorId: '', length: '', category: ''}
    };

    const wrapper = mount(<ManagerCoursePage {...props} />);
    const saveButton = wrapper.find('input.btn-primary');
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.authorId).toBe('Author must be set.');
  });
});
