import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

const list = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent</strong> requirement' } },
];

describe('Notifications', () => {
  it('renders 3 notification items', () => {
    render(<Notifications notifications={list} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });

  it('renders nothing in the list by default', () => {
    render(<Notifications />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});