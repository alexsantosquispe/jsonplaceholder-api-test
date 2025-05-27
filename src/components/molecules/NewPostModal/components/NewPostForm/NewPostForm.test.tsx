import { render, screen, waitFor } from '@testing-library/react';

import { NewPostForm } from './NewPostForm';
import * as apiModule from '../../../../../services/api';
import { UsersMock } from '../../../../../services/mocks';
import { QueryClientProviderWrapper } from '../../../../../utils/test-utils';

jest.mock('../../../../../services/api', () => ({
  ...jest.requireActual('../../../../../services/api'),
  getUserAsOptions: jest.fn()
}));

describe('NewPostForm', () => {
  const onCreatePostMock = jest.fn();

  beforeEach(() => {
    (apiModule.getUserAsOptions as jest.Mock).mockResolvedValue(UsersMock);
  });

  const renderComponent = () => {
    render(
      <QueryClientProviderWrapper>
        <NewPostForm isLoading={false} onCreatePost={onCreatePostMock} />
      </QueryClientProviderWrapper>
    );
  };

  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'Title *' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'Description *' })
    ).toBeInTheDocument();
  });

  it('should fetch and display user options', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
      expect(screen.getAllByRole('option').length).toBe(UsersMock.length + 1);
    });
  });
});
