/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Laptop from '../../src/lib/Laptop.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';
import Disconnect from '../../src/lib/Disconnect.svelte';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Disconnect Component', () => {
  test('its content is correctly rendered', () => {
    const { getByText } = render(Disconnect, { title: 'A Title' });
    expect(getByText('A Title')).toBeInTheDocument();
  });
});
