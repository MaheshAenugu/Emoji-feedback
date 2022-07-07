import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: true}

  onClickEmoji = () => this.setState({isFeedbackSelected: false})

  render() {
    const {isFeedbackSelected} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <div className="feedback-card">
          <h1 className="feedback-question">
            How satisfied are you with our customer support performance?
          </h1>
          {isFeedbackSelected ? (
            <ul className="emojis-list">
              {emojis.map(emoji => (
                <li key={emoji.id}>
                  <button
                    type="button"
                    className="emoji-btn"
                    onClick={this.onClickEmoji}
                  >
                    <img
                      src={emoji.imageUrl}
                      alt={emoji.name}
                      className="emoji"
                    />
                    <br />
                    <span className="emoji-name">{emoji.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="thank-you-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1 className="thank-you-text">Thank You!</h1>
              <p className="description">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
