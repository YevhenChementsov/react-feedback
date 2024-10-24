import styled from '@emotion/styled';
import { Itheme } from 'constants/theme';

export const StatisticsBox = styled.div`
  display: flex;
  justify-content: space-evenly;

  li:nth-child(4) {
    margin-top: 20px;
  }
`;

export const FeedbackStat = styled.p<{ theme?: Itheme }>`
  font-family: 'Minerve', cursive;
  font-size: 24px;
  color: ${props => props.theme.colors.primaryText};
`;

export const Emoji = styled.div`
  display: flex;
  align-items: center;
`;
