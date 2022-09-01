/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Plant from '../../src/lib/Plant.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Plant Component', () => {
  test('its content is correctly rendered', () => {
    const { getByText } = render(Plant, { title: 'A Title', size: '220' });

    expect(getByText('A Title')).toBeInTheDocument();
  });
});
