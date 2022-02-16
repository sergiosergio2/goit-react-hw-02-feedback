import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
    options,
    onLeaveFeedback,
}) => {
  return(
    <>
      { 
        options.map(option=>{
          return (<button 
            key={option}
                type='button'
                onClick={() => onLeaveFeedback(option)}
                className={s.button}
            >{option}</button>
            )   
          }
        )
      }
    </>   
  )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}