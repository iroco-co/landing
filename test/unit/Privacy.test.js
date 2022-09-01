/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Privacy from '../../src/lib/Privacy.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Privacy Component', () => {
  test('its content is correctly rendered', () => {
    const { getByText } = render(Privacy, { title: 'A Title', size: '220' });
    expect(getByText('A Title')).toBeInTheDocument();
  });
});
