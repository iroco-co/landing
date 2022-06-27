/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import ImageArticle from '../../src/lib/ImageArticle.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });


describe('Testing ImageArticle Component', () => {
  test('the content of the article is visible', () => {
    const { getByText } = render(ImageArticle, {
      imgSrc: '/images/irocoTeamSpirit.png',
      alt: 'Iroco Team hiking in the mountains',
      articleTitle: `Iroco, what is it?`,
      articleContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet.'
    });

    expect(getByText(`Iroco, what is it?`)).toBeInTheDocument();
    expect(
      getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet.'
      )
    ).toBeInTheDocument();
  });
});
