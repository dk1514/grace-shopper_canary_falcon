/* global describe beforeEach it */

import {expect} from 'chai'
import sinon from 'sinon'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleHat} from './SingleHat'

const adapter = new Adapter()
enzyme.configure({adapter})

// Define Mock Function that will mock behavior of dispatch call
const setup = singleHat => {
  const actions = {
    loadSingleHat: sinon.spy()
  }

  // Create shallow copy of component
  const component = shallow(<SingleHat singleHat={singleHat} {...actions} />)

  return {
    component: component,
    actions: actions,
    singleHat: component.find(singleHat)
  }
}

let singleHatProps

describe('SingleHat', () => {
  beforeEach(() => {
    // Create props for test
    singleHatProps = {
      name: 'Product 1'
    }
  })

  it('renders name of a single hat', () => {
    // Invoke mock function
    const {component} = setup(singleHatProps)

    // Test if props were passed into component and rendered properly
    expect(component.find('h1').text()).to.be.equal('Product 1')
  })
})
