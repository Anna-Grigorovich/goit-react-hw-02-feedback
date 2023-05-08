import css from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statictics = ({good, bad, neutral, countTotalFeedback, countPositiveFeedbackPercentage}) => {
  return(
    <div className={css.statistics}>
         <h2 className={css.statistics__title }>Statistics</h2>
         <ul className={css.statictics__list}>
           <li className='statictics__item'>Good: {good}</li>
           <li className='statictics__item'> Bad: {bad}</li>
           <li className='statictics__item'> Neutral: {neutral}</li>
           <li className='statictics__item'> Total: {countTotalFeedback}</li>
           <li className='statictics__item'>Positive feedback: <span>{countPositiveFeedbackPercentage}%</span></li>
        </ul>
      </div>
  );
};
Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statictics;