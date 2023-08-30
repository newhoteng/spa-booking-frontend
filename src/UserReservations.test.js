import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import { store } from './redux/store';
import { getUserReservations, postReservation } from './redux/reservations/reservationsSlice';

// Component imports
import UserReservations from './components/UserReservations';

const mockStore = configureStore([thunk]);

describe('UserReservations component', () => {
  test('fetches users reservations correctly', async () => {
    const store = mockStore({
      userReservations: {
        userReservations: [],
      },
      services: {
        services: [],
      },
    });

    // Dispatch the asynchronous action
    await store.dispatch(getUserReservations());

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <UserReservations />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('adds users reservations correctly', async () => {
    const store = mockStore({
      userReservations: {
        userReservations: [],
      },
      services: {
        services: [],
      },
    });

    // Dispatch the asynchronous action
    await store.dispatch(postReservation());

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <UserReservations />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});

it('userReservations page renders correctly', () => {
  const store = mockStore({
    userReservations: {
      userReservations: [],
    },
    services: {
      services: [],
    },
  });

  const userReservations = renderer
    .create(
      <Provider store={store}>
        <UserReservations page="/reservations">Reservations Page</UserReservations>
      </Provider>,
    )
    .toJSON();
  expect(userReservations).toMatchSnapshot();
});

it('renders Current component', () => {
  const store = mockStore({
    userReservations: {
      userReservations: [],
    },
    services: {
      services: [],
    },
  });

  render(
    <Provider store={store}>
      <UserReservations />
    </Provider>,
  );
});
