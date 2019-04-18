/* global describe beforeEach it */

import {expect} from 'chai'
import sinon from 'sinon'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllHats} from './AllHats'

const adapter = new Adapter()
enzyme.configure({adapter})

// Define Mock Function that will mock behavior of dispatch call
const setup = props => {
  const actions = {
    loadHats: sinon.spy()
  }

  // Create shallow copy of component
  const component = shallow(<AllHats {...props} {...actions} />)

  return {
    component: component,
    actions: actions
  }
}

let allHatsProps

describe('AllHats', () => {
  beforeEach(() => {
    // Create props for test
    allHatsProps = {
      allHats: {
        hats: []
      }
    }
  })

  it('renders blank page with no hats', () => {
    // Invoke mock function
    const {component} = setup(allHatsProps)

    // Test if props were passed into component and rendered properly
    expect(component.text()).to.be.equal('')
  })
})

describe('AllHats', () => {
  beforeEach(() => {
    // Create props for test
    allHatsProps = {
      allHats: {
        hats: [
          {
            id: 1,
            name: 'blah',
            price: 50
          },
          {
            id: 2,
            name: 'blah',
            price: 100
          }
        ]
      }
    }
  })

  it('renders two links if two hats', () => {
    // Invoke mock function
    const {component} = setup(allHatsProps)

    // Test if props were passed into component and rendered properly
    expect(component.text()).to.be.equal('<Link /><Link />')
  })
})
