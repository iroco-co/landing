/**
 * @jest-environment jsdom
 */
import signup from '../../src/routes/signup.svelte';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import { addMessages, init } from 'svelte-i18n';
import en from '../../src/i18n/en.json';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Signup Page', () => {
  test('headers are correctly rendered', () => {
    const { getByText } = render(signup);
    expect(getByText('Our offer')).toBeInTheDocument();
    expect(getByText("If it's free, it's the planet the product")).toBeInTheDocument();
    expect(getByText('Ethics and confidentiality')).toBeInTheDocument();
    expect(getByText("We don't change email every year")).toBeInTheDocument();
    expect(getByText('Roadmap')).toBeInTheDocument();
  });
});
