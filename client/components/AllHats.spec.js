/* global describe beforeEach it */

import {expect} from 'chai'
import sinon from 'sinon'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllHats} from './AllHats'

const adapter = new Adapter()
enzyme.configure({adapter})

const setup = props => {
  const actions = {
    loadHats: sinon.spy()
  }

  const component = shallow(<AllHats {...props} {...actions} />)

  return {
    component: component,
    actions: actions
  }
}

let allHatsProps

describe('AllHats', () => {
  beforeEach(() => {
    allHatsProps = {
      allHats: {
        hats: []
      }
    }
  })

  it('renders blank page with no hats', () => {
    const {component} = setup(allHatsProps)

    expect(component.text()).to.be.equal('')
  })
})

describe('AllHats', () => {
  beforeEach(() => {
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
    const {component} = setup(allHatsProps)

    expect(component.text()).to.be.equal('<Link /><Link />')
  })
})
