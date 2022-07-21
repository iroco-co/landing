/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Header from '../../src/lib/Header.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });


describe('Testing Header Component', () => {
  test('correctly render the header', () => {

    const { getByText } = render(Header);
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Blog')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
    expect(getByText('Subscription')).toBeInTheDocument();
    expect(getByText('Sign in')).toBeInTheDocument();
  });
});
