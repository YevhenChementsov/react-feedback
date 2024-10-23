import { Component } from 'react';

import { Section } from 'components/Section/Section';

import { Container } from './App.styled';

interface AppState {
  good: number;
  neutral: number;
  bad: number;
}

export class App extends Component<object, AppState> {
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
    return (
      <Container>
        <h1 hidden>Feedback</h1>
        <Section title="Please leave feedback">Feedback Options</Section>
        <Section title="Statistics">Feedback Statistics</Section>
        This is App component
      </Container>
    );
  }
}
