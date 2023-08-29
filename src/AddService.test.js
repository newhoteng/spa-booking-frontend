import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import the Provider
import { createStore } from 'redux'; // Import createStore from Redux
import AddService from './components/AddService';
import rootReducer from './redux/serviceSlice'; // Import your rootReducer

test('AddService component matches snapshot when not submitted', () => {
  // Create a mock Redux store
  const store = createStore(rootReducer);

  const { container } = render(
    <Provider store={store}>{/* Wrap component with Provider */}
      <AddService />
    </Provider>,
  );

  // Use snapshot testing to compare the rendered component with a stored snapshot.
  expect(container).toMatchSnapshot();
});

test('AddService component matches snapshot when submitted', () => {
  const store = createStore(rootReducer);

  render(
    <Provider store={store}>
      <AddService />
    </Provider>,
  );
});
