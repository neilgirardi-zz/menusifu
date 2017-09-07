import React from 'react';
import ReactDOM from 'react-dom';
import Order from './components/Order';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Order />, div);
});