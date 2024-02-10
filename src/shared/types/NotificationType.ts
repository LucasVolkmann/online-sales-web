type NotificationTypeEnum = 'success' | 'info' | 'warning' | 'error';

export default interface NotificationType {
  message: string;
  type: NotificationTypeEnum;
  description?: string;
}
