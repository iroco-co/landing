/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import IrocologoSignupbutton from '../../src/lib/IrocologoSignupbutton.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing IrocologoSignupButton Component', () => {
  test('the content of the button is correctly rendered', () => {
    const { getByText } = render(IrocologoSignupbutton);
    expect(getByText('Sign up')).toBeInTheDocument();
  });
});
