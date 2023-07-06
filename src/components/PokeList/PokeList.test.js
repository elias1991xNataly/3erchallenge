import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PokeList from './PokeList';

describe('PokeList', () => {
  let props;
  let shallowPokeList;
  let renderedPokeList;
  let mountedPokeList;

  const shallowTestComponent = () => {
    if (!shallowPokeList) {
      shallowPokeList = shallow(<PokeList {...props} />);
    }
    return shallowPokeList;
  };

  const renderTestComponent = () => {
    if (!renderedPokeList) {
      renderedPokeList = render(<PokeList {...props} />);
    }
    return renderedPokeList;
  };

  const mountTestComponent = () => {
    if (!mountedPokeList) {
      mountedPokeList = mount(<PokeList {...props} />);
    }
    return mountedPokeList;
  };  

  beforeEach(() => {
    props = {};
    shallowPokeList = undefined;
    renderedPokeList = undefined;
    mountedPokeList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
