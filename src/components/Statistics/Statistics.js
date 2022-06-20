import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li>
        <p>Good</p>
        <p>{good}</p>
      </li>
      <li>
        <p>Neutral</p>
        <p>{neutral}</p>
      </li>
      <li>
        <p>Bad</p>
        <p>{bad}</p>
      </li>
      <li>
        <p>Total</p>
        <p>{total}</p>
      </li>
      <li>
        <p>Positive Feedback</p>
        <p>{positivePercentage}%</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
