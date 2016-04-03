import React from 'react'
import RainbowText from 'patchkit-rainbow-text'

export default class WelcomeForm extends React.Component {
  static propTypes = {
    setIsHighlighted: React.PropTypes.func.isRequired,
    setIsValid: React.PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.setIsValid(true)
    this.props.setIsHighlighted(true)
  }
  submit(cb) {
    cb()
  }
  render() {
    return <div className="text-center vertical-center">
      <h1>Welcome to <RainbowText text="Patchwork" /></h1>
      <h3>{"Let's"} get started.</h3>
    </div>
  }
}