import React, {Component} from 'react';
import FeedbackOptions from './components/feedbackOption';
import Statistics from 'components/statistic';



class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,

    };
    onLeaveFeedback = evt => {
        const click = evt.currentTarget.click;
        this.setState(prevState => ({[click]: prevState[click] + 1,}))

    }

    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    render() {
        return (
       <>
        <FeedbackOptions
        options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}>
        </FeedbackOptions>
   
    
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          
        ></Statistics>
        </>
    
        );
    }
}
export default App;