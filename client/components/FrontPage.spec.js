/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {FrontPage} from './FrontPage'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('FrontPage', () => {
  let frontPage

  beforeEach(() => {
    // Create shallow copy of component
    frontPage = shallow(<FrontPage />)
  })

  it('renders the header in an div', () => {
    // Test if component renders properly
    expect(frontPage.find('div').text()).to.be.equal(
      'Welcome to the Canary Falcon Hat Store'
    )
  })
})
