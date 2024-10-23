import styled from '@emotion/styled';
import { Itheme } from 'constants/theme';

export const NotificationMessage = styled.h3<{ theme?: Itheme }>`
  font-family: 'Minerve', cursive;
  font-size: 24px;
  color: ${props => props.theme.colors.primaryText};
  text-align: center;
`;
