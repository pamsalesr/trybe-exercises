import React from 'react'

class Feedback extends React.Component {

  render() {
    let error = undefined;
    if(!this.props.value) error = 'Dont forget do give me a feedback!'

    return (
      <label>
        Do you have any feedbacks on my App?
        <textarea name='feedback' value={this.props.feedback} onChange={this.props.handleChange} />
        <span>{error ? error : ''}</span>
      </label>
    );
  }

}

export default Feedback;
