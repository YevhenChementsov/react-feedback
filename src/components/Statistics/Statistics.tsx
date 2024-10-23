import {
  BsEmojiFrownFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
} from 'react-icons/bs';
import { Emoji, FeedbackStat, StatisticsBox } from './Statistics.styled';

interface StatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: StatisticsProps) => (
  <StatisticsBox>
    <ul>
      <li>
        <FeedbackStat>Good: {good}</FeedbackStat>
      </li>
      <li>
        <FeedbackStat>Neutral: {neutral}</FeedbackStat>
      </li>
      <li>
        <FeedbackStat>Bad: {bad}</FeedbackStat>
      </li>
      <li>
        <FeedbackStat>Total: {total}</FeedbackStat>
      </li>
      <li>
        <FeedbackStat>Positive feedback: {positivePercentage}%</FeedbackStat>
      </li>
    </ul>
    <Emoji>
      {positivePercentage <= 33 ? (
        <BsEmojiFrownFill size={64} color={'#ff0000'} />
      ) : positivePercentage <= 66 ? (
        <BsEmojiNeutralFill size={64} color={'#0089ff'} />
      ) : (
        <BsEmojiSmileFill size={64} color={'#00ff00'} />
      )}
    </Emoji>
  </StatisticsBox>
);
