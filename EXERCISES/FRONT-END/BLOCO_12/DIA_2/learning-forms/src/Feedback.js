import React from 'react';
import { connect } from 'react-redux';
import { saveValues } from './actions';

class Feedback extends React.Component {
  render() {
    const { feedback, feedbackDispatch } = this.props;
    let error = undefined;
    if(!this.props.value) error = 'Dont forget do give me a feedback!'

    return (
      <label>
        Do you have any feedbacks on my App?
        <textarea name='feedback' value={this.props.feedback} onChange={ ({target}) => feedbackDispatch(target.value) } />
        <span>{error ? error : ''}</span>
      </label>
    );
  }

}

const mapStateToProps = (state) => ({
  feedback: state.saveReducer.feedback,
});

const mapDispatchToProps = (dispatch) => ({
  feedbackDispatch: ((value) => dispatch(saveValues(value)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
