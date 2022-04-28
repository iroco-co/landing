/**
 * @jest-environment jsdom
 */
import index from '../../src/routes/index.svelte';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

test('Welcome', () => {
  const { getByText } = render(index);

  expect(getByText('Welcome to SvelteKit')).toBeInTheDocument();
});
