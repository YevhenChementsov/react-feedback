import styled from '@emotion/styled';

const setColor = props => {
  switch (props.value) {
    case 'good':
      return '#00ff00';
    case 'neutral':
      return '#0089ff';
    case 'bad':
      return '#ff0000';
    default:
      return 'transparent';
  }
};

export const ButtonsList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

export const FeedbackButton = styled.button`
  width: 70px;
  height: 40px;

  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  border: 1px solid;
  border-radius: 8px;

  box-shadow: 4px 2px 5px 2px #808080;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #ffffff;

    background-color: ${setColor};
    border: 1px solid ${setColor};

    box-shadow: 0 0 10px 2px ${setColor};
  }

  :focus {
    outline: none;
  }
`;
