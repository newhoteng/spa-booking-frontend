import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DeleteService from './components/Delete'; // Update the import path to match your project structure

const mockStore = configureStore([thunk]);

const initialState = {
  services: {
    services: [
      {
        id: 1,
        name: 'Service 1',
        is_removed: false,
      },
      {
        id: 2,
        name: 'Service 2',
        is_removed: true,
      },
    ],
    isLoading: false,
    isError: false,
  },
};

let store;

beforeEach(() => {
  store = mockStore(initialState);
});

test('renders the DeleteService component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <DeleteService />
    </Provider>,
  );

  // Use a flexible text matcher to find elements
  expect(getByText(/Service 1/i)).toBeInTheDocument();
  expect(getByText(/Service 2/i)).toBeInTheDocument();
});

test('clicking the delete button toggles service removal', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <DeleteService />
    </Provider>,
  );

  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  // Wait for Redux actions to complete
  await waitFor(() => {
    const actions = store.getActions();
    expect(actions).toHaveLength(2); // Two actions dispatched: removeService and toggleService
    expect(actions[0].type).toBe('services/RemoveService/pending');
    expect(actions[1].type).toBe('services/toggleService');
  });

  expect(getByText('Add', { selector: 'button' })).toBeInTheDocument(); // Button text should change to "Add"
});
