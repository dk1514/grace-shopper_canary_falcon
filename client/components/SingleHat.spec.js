/* global describe beforeEach it */

import {expect} from 'chai'
import sinon from 'sinon'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleHat} from './SingleHat'

const adapter = new Adapter()
enzyme.configure({adapter})

const setup = singleHat => {
  const actions = {
    loadSingleHat: sinon.spy()
  }

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
    singleHatProps = {
      name: 'Product 1'
    }
  })

  it('renders name of a single hat', () => {
    const {component} = setup(singleHatProps)

    expect(component.find('h1').text()).to.be.equal('Product 1')
  })
})
