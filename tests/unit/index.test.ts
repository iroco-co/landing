/**
 * @jest-environment jsdom
 */
import index from '../../src/routes/index.svelte';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import { addMessages, init } from 'svelte-i18n';
import en from '../../src/i18n/en.json';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing HomePage', () => {
  test('the page is correctly rendered', () => {
    const { getByText } = render(index);
    expect(getByText(`Iroco, what is it?`)).toBeInTheDocument();
  });
});
