import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders default type in blue', () => {
    render(<NotificationItem type="default" value="test" />);
    const li = screen.getByText('test');
    expect(li).toHaveStyle('color: blue');
    expect(li).toHaveAttribute('data-notification-type', 'default');
  });

  it('renders urgent type in red', () => {
    render(<NotificationItem type="urgent" value="test" />);
    const li = screen.getByText('test');
    expect(li).toHaveStyle('color: red');
    expect(li).toHaveAttribute('data-notification-type', 'urgent');
  });
});