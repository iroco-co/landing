/**
 * @jest-environment jsdom
 */
import contact from '../../src/routes/contact.svelte';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import { addMessages, init } from 'svelte-i18n';
import en from '../../src/i18n/en.json';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Contact Page', () => {
  test('the page is correctly rendered', () => {
    const { getAllByText, getByText } = render(contact);

    expect(getByText('Contact us:')).toBeInTheDocument();
    expect(getAllByText('Send us an email!')).toHaveLength(1);
    expect(getByText('Sign up for our newsletter to become a soft user')).toBeInTheDocument();
  });
});
