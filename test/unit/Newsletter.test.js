/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Newsletter from '../../src/lib/Newsletter.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Newsletter Component', () => {
  test('its content is correctly rendered', () => {
    const { getByText } = render(Newsletter);
    expect(getByText('Sign up here to become a soft user')).toBeInTheDocument();
  });
});
