import React from 'react'
import { InputNumber } from 'antd'
import _ from 'lodash'

export default class FanoFormNumber extends React.Component {
  render () {
    const f = this.props
    const props = Object.assign(_.pick(f.props, [
      'placeholder',
      'max',
      'min',
      'step',
      'disabled'
    ]), _.get(f, 'componentProps', {}), {
      precision: 0
    })
    props.step = (props.step && parseInt(props.step)) || 1
    return (
      <InputNumber {...props} />
    )
  }
}
