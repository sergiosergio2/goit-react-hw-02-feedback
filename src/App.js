import React, {Component} from 'react';
import FeedbackOptions from './components/feedbackOption';



class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,

    }

    render() {
        return (
        <>
        <FeedbackOptions
        options={['good', 'neutral', 'bad']} onLeaveFeedback={console.log}>
        </FeedbackOptions>
        </>
        );
    }
}
export default App;