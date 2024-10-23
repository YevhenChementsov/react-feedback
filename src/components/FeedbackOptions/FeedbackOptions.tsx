import { useTheme } from '@emotion/react';
import { AppState } from 'components/App/App';
import { Itheme } from 'constants/theme';
import { ButtonsList, FeedbackButton } from './FeedbackOptions.styled';

interface FeedbackOptionsProps {
  options: (keyof AppState)[];
  onLeaveFeedback: (option: keyof AppState) => void;
}

export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}: FeedbackOptionsProps) => {
  const theme = useTheme() as Itheme;

  return (
    <ButtonsList>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackButton
              type="button"
              theme={theme}
              value={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButton>
          </li>
        );
      })}
    </ButtonsList>
  );
};
