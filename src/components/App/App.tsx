import { Component } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';

import { Container } from './App.styled';

export interface AppState {
  good: number;
  neutral: number;
  bad: number;
}

export class App extends Component<Record<string, never>, AppState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, feedback) => total + feedback, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;

  handleClick = (option: keyof AppState) => {
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state) as (keyof AppState)[];

    return (
      <Container>
        <h1 hidden>Feedback</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given...yet ;-)" />
          )}
        </Section>
      </Container>
    );
  }
}
