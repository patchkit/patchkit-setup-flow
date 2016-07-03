import React from 'react'
import RainbowText from 'patchkit-rainbow-text'
import t from 'patchwork-translations'

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
      <h1>{t('setup.WelcomeToPW')} <RainbowText text={t('Patchwork')} /></h1>
      <h3>{t('setup.GetStarted')}</h3>
    </div>
  }
}