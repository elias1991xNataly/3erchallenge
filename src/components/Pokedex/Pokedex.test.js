import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Pokedex from './Pokedex';

describe('Pokedex', () => {
  let props;
  let shallowPokedex;
  let renderedPokedex;
  let mountedPokedex;

  const shallowTestComponent = () => {
    if (!shallowPokedex) {
      shallowPokedex = shallow(<Pokedex {...props} />);
    }
    return shallowPokedex;
  };

  const renderTestComponent = () => {
    if (!renderedPokedex) {
      renderedPokedex = render(<Pokedex {...props} />);
    }
    return renderedPokedex;
  };

  const mountTestComponent = () => {
    if (!mountedPokedex) {
      mountedPokedex = mount(<Pokedex {...props} />);
    }
    return mountedPokedex;
  };  

  beforeEach(() => {
    props = {};
    shallowPokedex = undefined;
    renderedPokedex = undefined;
    mountedPokedex = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
