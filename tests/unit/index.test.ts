/**
 * @jest-environment jsdom
 */
import index from '../../src/routes/index.svelte';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import { addMessages, init } from 'svelte-i18n';
import fr from '../../src/i18n/fr.json';

addMessages('fr', fr);
init({ fallbackLocale: 'fr', initialLocale: 'fr' });

describe('Testing HomePage', () => {
  test('the page is correctly rendered', () => {
    const { getByText } = render(index);
    expect(getByText(`Iroco, c'est quoi ?`)).toBeInTheDocument();
  });
});
