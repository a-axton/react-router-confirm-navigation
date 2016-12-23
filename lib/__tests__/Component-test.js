import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Component from '../Component';

jest.dontMock('../Component');

describe('test suite', function () {
  it('should render', function () {
    expect(shallow(<Component />).text()).toEqual('Hello World');
  });
});
