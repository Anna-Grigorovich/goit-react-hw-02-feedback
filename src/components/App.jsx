import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statictics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css'
import { Section } from './Section/Section';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  onLeaveFeedback = (e) =>{
    const btnClick = e.target.value;
    this.setState(p => ({
      ...p,
      [btnClick]: p[btnClick] + 1,
    }))
  }
  countTotalFeedback = () => {
    const {good, bad, neutral} = this.state;
    return good + bad + neutral;
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }




  render() {
  const btnNames = Object.keys(this.state);
  const {good, neutral, bad} = this.state;
  return(
   <div className={css.App}>
    <Section title='Please leave feedback'>
       <FeedbackOptions options={btnNames} onLeaveFeedback={this.onLeaveFeedback} /> 
     </Section>
  
  <Section title='Statistics'>
  {this.countTotalFeedback() > 0 ? 
  (<Statistics good={good} neutral={neutral} bad={bad} countTotalFeedback={this.countTotalFeedback()} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}/>)
   : (<Notification message="There is no feedback"></Notification>
)} 
  </Section>

 </div>
  );
}
  
 }
 
 
 export default App;