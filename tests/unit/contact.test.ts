/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import Contact from '../../src/lib/Contact.svelte';
import fr from '../../src/i18n/fr.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('fr', fr);
init({ fallbackLocale: 'fr', initialLocale: 'fr' });

describe('Testing Contact Component', () => {
  test('its content is correctly rendered', () => {
    const { getByText } = render(Contact);
    expect(getByText('Envie de nous contacter ?')).toBeInTheDocument();
  });
});
