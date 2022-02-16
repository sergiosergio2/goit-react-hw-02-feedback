import React, {Component} from 'react';
import FeedbackOptions from './components/feedbackOption';
import Statistics from 'components/statistic';
import Section from 'components/section';
import Notification from 'components/notification';



class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,

    };
    onLeaveFeedback = evt => {
        
        this.setState(prevState => ({[evt]: prevState[evt] + 1}))

    }

    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad;
    }
    countPositiveFeedbackPercentage () {
        const total = this.countTotalFeedback();
        return !total ? "0" : Math.round(this.state.good / total * 10000)/100;
    }

    render() {
        return (
       <>
       <Section title= "Please leave feedback">
        <FeedbackOptions
        options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}>
        </FeedbackOptions>
        </Section>
        <Section title="Statistics">
            {this.state.good||this.state.neutral||this.state.bad
            ?
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          
        ></Statistics>
        :
        <Notification message="There is no feedback"></Notification>

            }
            </Section>
            </>
    
        );
    }
}
export default App;