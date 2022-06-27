/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Contact from '../../src/lib/Contact.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Contact Component', () => {
  test('its content is correctly rendered', () => {
    const { getByText } = render(Contact);
    expect(getByText('Want to get in touch?')).toBeInTheDocument();
  });
});
