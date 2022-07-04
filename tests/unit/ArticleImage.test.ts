/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import ArticleImage from '../../src/lib/ArticleImage.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing ImageArticle Component', () => {
  test('render content of the component with one button', () => {
    const { getByText } = render(ArticleImage, {
      title: 'A project that started in 2008',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet.',
      src: '/images/irocoTeamSpirit.png',
      alt: 'Iroco Team Building'
    });

    expect(getByText('A project that started in 2008')).toBeInTheDocument();
    expect(
      getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet.'
      )
    ).toBeInTheDocument();
  });
});
