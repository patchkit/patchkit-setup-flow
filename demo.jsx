import React from 'react'
import SetupFlow from './index'

const exampleUserId = '@sUQvXf6nfCfxQ3amS3LrQ7AfRsimJPLb6lM4ul8DqwA=.ed25519'

export default class SetupFlowDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    const onOpen = () => this.setState({ isOpen: true })
    const onClose = () => { this.setState({ isOpen: false }); console.log('closed') }
    return <div>
      <h1>patchkit-setup-flow</h1>
      <section className="setup-flow">
        <header>&lt;SetupFlow&gt;</header>
        <div className="content">
          <a className="btn highlighted" onClick={onOpen}>Click to open</a>
          <SetupFlow id={exampleUserId} isOpen={this.state.isOpen} onClose={onClose} />
        </div>
      </section>
    </div>
  }
}