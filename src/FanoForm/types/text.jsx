import React from 'react'
import { Input } from 'antd'
import _ from 'lodash'

export default class FanoFormText extends React.Component {
  render () {
    const f = this.props
    const props = Object.assign(_.pick(f.props, [
      'placeholder',
      'disabled'
    ]), _.get(f, 'componentProps', {}))
    return (
      <Input {...props} />
    )
  }
}
