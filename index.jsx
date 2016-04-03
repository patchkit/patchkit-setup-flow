import React from 'react'
import ModalFlow from 'patchkit-modal/flow'
import Welcome from './welcome'
import ProfileName from 'patchkit-form-profile-name'
import ProfileImage from 'patchkit-form-profile-image'
import schemas from 'ssb-msg-schemas'

const FORMS = [Welcome, ProfileName, ProfileImage]

export default class SetupFlow extends React.Component {
  static contextTypes = {
    ssb: React.PropTypes.object
  }
  static propTypes = {
    id: React.PropTypes.string.isRequired
  }
  onSubmitName(name, cb) {
    // publish update message
    this.context.ssb.publish(schemas.name(this.props.id, name), cb)
  }
  onSubmitImage(buffer, cb) {
    // upload blob
    this.context.ssb.patchwork.addFileToBlobs(buffer.toString('base64'), (err, hash) => {
      if (err)
        return cb(err)

      // publish update message
      const imageLink = {
        link: hash,
        size: buffer.length,
        type: 'image/png',
        width: 512,
        height: 512
      }
      this.context.ssb.publish(schemas.image(this.props.id, imageLink), cb)
    })
  }
  render() {
    return <ModalFlow
      className="fullheight"
      Forms={FORMS}
      formsProps={[
        {},
        {
          className: 'text-center vertical-center',
          onSubmit: this.onSubmitName.bind(this)
        },
        {
          className: 'text-center',
          onSubmit: this.onSubmitImage.bind(this)
        },
      ]}
      isOpen={this.props.isOpen}
      onClose={this.props.onClose} />
  }
}