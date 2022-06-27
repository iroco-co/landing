/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Footer from '../../src/lib/Footer.svelte';
import fr from '../../src/i18n/fr.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('fr', fr);
init({ fallbackLocale: 'fr', initialLocale: 'fr' });

describe('Testing Footer Component', () => {
  test('any title is visible', () => {
    const { getByText } = render(Footer);
    expect(getByText('Newsletter')).toBeInTheDocument();
    expect(getByText('Menu')).toBeInTheDocument();
  });
});
