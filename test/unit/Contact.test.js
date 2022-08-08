/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/svelte';
import Contact from '../../src/lib/Contact.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Contact Component', () => {
  test('its content is correctly rendered', () => {
    const { getByText } = render(Contact);
    expect(getByText('Want to get in touch?')).toBeInTheDocument();
    expect(screen.getByText('Want to get in touch?').closest('a')).toHaveAttribute(
      'href',
      '/contact'
    );
  });

  test('prop hrefMail added leads to ', () => {
    const { getByText } = render(Contact, { hrefMailto: true });
    expect(screen.getByText('Want to get in touch?').closest('a')).toHaveAttribute(
      'href',
      'mailto:hello@iroco.fr'
    );
  });
});
