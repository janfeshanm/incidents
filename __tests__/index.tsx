import { render, screen, waitFor } from '@testing-library/react-native';

import Index from '@/app/index';

describe('<Index />', () => {
  test('Async useEffect renders correctly on Index', async () => {
     render(<Index />);
     await waitFor(() => {
      expect(screen.queryByTestId('ID5')).toHaveTextContent("Fire");
    });
    expect(screen).toMatchSnapshot();
  });
});