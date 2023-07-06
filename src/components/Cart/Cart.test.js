import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Cart from './Cart';

describe('Cart', () => {
  let props;
  let shallowCart;
  let renderedCart;
  let mountedCart;

  const shallowTestComponent = () => {
    if (!shallowCart) {
      shallowCart = shallow(<Cart {...props} />);
    }
    return shallowCart;
  };

  const renderTestComponent = () => {
    if (!renderedCart) {
      renderedCart = render(<Cart {...props} />);
    }
    return renderedCart;
  };

  const mountTestComponent = () => {
    if (!mountedCart) {
      mountedCart = mount(<Cart {...props} />);
    }
    return mountedCart;
  };  

  beforeEach(() => {
    props = {};
    shallowCart = undefined;
    renderedCart = undefined;
    mountedCart = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
