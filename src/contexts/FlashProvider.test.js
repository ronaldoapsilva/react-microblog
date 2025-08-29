import { act, render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import FlashMessage from '../components/FlashMessage';
import FlashProvider, { useFlash } from './FlashProvider';

beforeEach(() => {
  jest.useFakeTimers();
})

afterEach(() => {
  jest.useRealTimers()
})

test('flashes a message', async()=> {
  const Test = () => {
    const flash = useFlash();
    useEffect(() => {
      flash('foo', 'danger');
    }, []);
    return null;
  };

  render(
    <FlashProvider>
      <FlashMessage/>
      <Test/>
    </FlashProvider>
  );

  const alert = screen.getByRole('alert');

  expect(alert).toHaveTextContent('foo');
  expect(alert).toHaveClass('alert-danger');
  expect(alert).toHaveAttribute('data-visible', 'true');



  act(() => jest.runAllTimers());
  expect(alert).toHaveAttribute('data-visible', 'false');
});