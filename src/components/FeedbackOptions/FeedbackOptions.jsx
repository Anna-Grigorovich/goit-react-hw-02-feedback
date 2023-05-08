import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
      };
    render() {
        return(<div className={css.feedback}>
            <h1 className={css.feedback__title}>Please leave feedback</h1>
            <div>
                {this.props.options.map(btn =>(
                <button type='button' key={btn} value={btn} className={css.feedback_buttons} onClick={e => this.props.onLeaveFeedback(e)}>{btn}</button>))}
            </div>
          </div>)
    }
}

export default FeedbackOptions;