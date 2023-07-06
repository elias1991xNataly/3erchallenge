import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PokeCard from './PokeCard';

describe('PokeCard', () => {
  let props;
  let shallowPokeCard;
  let renderedPokeCard;
  let mountedPokeCard;

  const shallowTestComponent = () => {
    if (!shallowPokeCard) {
      shallowPokeCard = shallow(<PokeCard {...props} />);
    }
    return shallowPokeCard;
  };

  const renderTestComponent = () => {
    if (!renderedPokeCard) {
      renderedPokeCard = render(<PokeCard {...props} />);
    }
    return renderedPokeCard;
  };

  const mountTestComponent = () => {
    if (!mountedPokeCard) {
      mountedPokeCard = mount(<PokeCard {...props} />);
    }
    return mountedPokeCard;
  };  

  beforeEach(() => {
    props = {};
    shallowPokeCard = undefined;
    renderedPokeCard = undefined;
    mountedPokeCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
