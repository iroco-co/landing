/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import ImageArticle from '../../src/lib/ImageArticle.svelte';
import fr from '../../src/i18n/fr.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('fr', fr);
init({ fallbackLocale: 'fr', initialLocale: 'fr' });

describe('Testing ImageArticle Component', () => {
  test('the content of the article is visible', () => {
    const { getByText } = render(ImageArticle, {
      imgSrc: '/images/irocoTeamSpirit.png',
      alt: 'Iroco Team hiking in the mountains',
      articleTitle: `Iroco, c'est quoi ?`,
      articleContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet.',
      btnContent: 'A propos'
    });

    expect(getByText(`Iroco, c'est quoi ?`)).toBeInTheDocument();
    expect(
      getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet.'
      )
    ).toBeInTheDocument();
    expect(getByText('A propos')).toBeInTheDocument();
  });
});
