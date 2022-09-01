/**
 * @jest-environment jsdom
 */
import faq from '../../src/routes/faq.svelte';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import { addMessages, init } from 'svelte-i18n';
import en from '../../src/i18n/en.json';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Faq Page', () => {
  test('the content is correctly rendered', () => {
    const { getByText } = render(faq);

    expect(getByText('FAQ')).toBeInTheDocument();
    expect(
      getByText(
        'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
      )
    ).toBeInTheDocument();
    expect(getByText('What exactly does your offer include?')).toBeInTheDocument();
  });
});
