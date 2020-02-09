import React from 'react'
import { withTheme } from 'styled-components'

class Index extends React.Component {
  render() {
    return <h1>{this.props.theme.background}</h1>
  }
}

export default withTheme(Index)
