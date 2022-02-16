import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  
}) => {
  return (
<div>
  <p className={s.text}>Good: {good}</p>
  <p className={s.text}>Neutral: {neutral}</p>
  <p className={s.text}>Bad: {bad}</p>
  <p className={s.text}>Total: {total}</p>
  <p className={s.text}>Postive feedback: {positivePercentage} %</p>
  </div>
  )
}



Statistics.propTypes = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.number.isRequired,
  
};
export default Statistics;