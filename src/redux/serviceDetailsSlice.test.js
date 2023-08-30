import axios from 'axios'; // Import axios for mocking
import configureStore from 'redux-mock-store'; // Import configureStore from Redux Toolkit
import thunk from 'redux-thunk'; // Import thunk middleware
import { fetchServiceDetails } from './serviceDetailsSlice'; // Import the async action

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn(),
}));

const mockStore = configureStore([thunk]); // Create a mock store

describe('serviceDetailsSlice', () => {
  let store;
  const mockServiceData = {
    id: 1,
    name: 'Sample Service',
    price: 50,
    duration: 60,
    image: 'sample.jpg',
  };

  beforeEach(() => {
    store = mockStore({
      serviceDetails: {
        serviceDetails: [],
        isLoading: false,
        isError: false,
      },
    });

    jest.clearAllMocks(); // Reset the mock calls before each test
  });

  test('fetchServiceDetails successfully fetches data', async () => {
    axios.get.mockResolvedValueOnce({ data: mockServiceData });
  
    await store.dispatch(fetchServiceDetails(1));
  
    const actions = store.getActions();
    expect(actions[1].type).toEqual(fetchServiceDetails.fulfilled.type); // Check index 1
    expect(actions[1].payload).toEqual(mockServiceData); // Check index 1
  });

  test('fetchServiceDetails handles error', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));
  
    await store.dispatch(fetchServiceDetails(1));
  
    const actions = store.getActions();
    expect(actions[1].type).toEqual(fetchServiceDetails.rejected.type); // Check index 1
  });
});
