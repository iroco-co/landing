/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Zen from '../../src/lib/Zen.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Zen Component', () => {
  test('its content is correctly rendered', () => {
    const { getByText, container } = render(Zen, { title: 'A Title' });
    expect(getByText('A Title')).toBeInTheDocument();
  });
});
