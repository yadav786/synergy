import React from 'react'
import renderer from 'react-test-renderer'
import { OnlyTestSnap } from '../components/OnlyTestSnap'

it('renders correctly Only Test Snap ', () => {
  const items = [1, 2, 3, 4]
  const tree = renderer.create(<OnlyTestSnap items={items} />).toJSON()
  // console.log(tree)
  // console.log(tree.children[0].props)
  expect(tree).toMatchSnapshot()
})
