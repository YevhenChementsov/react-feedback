import { NotificationMessage } from './Notification.styled';

export const Notification = ({ message }: { message: string }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};
