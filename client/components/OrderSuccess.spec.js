/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import OrderSuccess from './OrderSuccess'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('OrderSuccess', () => {
  let orderSuccess

  beforeEach(() => {
    // Create shallow copy of component
    orderSuccess = shallow(<OrderSuccess />)
  })

  it('renders the header in an div', () => {
    // Test if component renders properly
    expect(orderSuccess.find('div').text()).to.be.equal(
      'Your order has been submitted.'
    )
  })
})
