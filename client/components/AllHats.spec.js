/* global describe beforeEach it */

import {expect} from 'chai'
import sinon from 'sinon'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllHats} from './AllHats'

const adapter = new Adapter()
enzyme.configure({adapter})

// Define set up function for running test
const setup = props => {
  // Define Mock Function that will mock behavior of dispatch call
  const actions = {
    loadHats: sinon.spy()
  }

  // Create shallow copy of component
  const component = shallow(<AllHats {...props} {...actions} />)

  return {
    // Return shallow copy of component and mock function for dispatch call
    component: component,
    actions: actions
  }
}

let allHatsProps

describe('AllHats', () => {
  beforeEach(() => {
    // Create props to pass into test
    allHatsProps = {
      allHats: {
        hats: []
      }
    }
  })

  it('renders blank page with no hats', () => {
    // Invoke set up function (shallow copy of component and mock function for dispatch behavior)
    const {component} = setup(allHatsProps)

    // Test if props were passed into component and rendered properly
    expect(component.text()).to.be.equal('')
  })
})

describe('AllHats', () => {
  beforeEach(() => {
    // Create props to pass into test
    allHatsProps = {
      allHats: {
        hats: [
          {
            id: 1,
            name: 'baseball',
            price: 500
          }
        ]
      }
    }
  })

  it('renders two links if two hats', () => {
    // Invoke set up function (shallow copy of component and mock function for dispatch behavior)
    const {component} = setup(allHatsProps)

    // Test if props were passed into component and rendered properly
    expect(component.text()).to.be.equal(
      `${allHatsProps.allHats.hats[0].name}<Link />$${allHatsProps.allHats
        .hats[0].price / 100}`
    )
  })
})
