/**
 * @jest-environment jsdom
 */
import signup from '../../src/routes/signup.svelte';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/svelte';
import { addMessages, init } from 'svelte-i18n';
import en from '../../src/i18n/en.json';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing Signup Page', () => {
  test('headers are correctly rendered', () => {
    const { getByText } = render(signup, { readMore: false });

    expect(getByText('Our offer')).toBeInTheDocument();
    expect(getByText("If it's free, it's the planet the product")).toBeInTheDocument();
    expect(getByText('Ethics and confidentiality')).toBeInTheDocument();
    expect(getByText("We don't change email every year")).toBeInTheDocument();
    expect(getByText('Roadmap')).toBeInTheDocument();
    expect(getByText('FAQ')).toBeInTheDocument();
  });

  test('when readmore equals to false, readmore button is displayed without class "opened"', () => {
    const { container } = render(signup, { readMore: false });
    const button = screen.getByText('Read more');
    const faqcontainer = container.querySelector('.signup__faq__container__q-a');

    expect(button).toBeInTheDocument();
    expect(faqcontainer).not.toHaveClass('opened');
  });

  test('when readmore equals to true, the class "opened" is applied and the content of the readbutton changes', () => {
    const { container } = render(signup, { readMore: true });
    const button = screen.getByText('Read less');
    const faqcontainer = container.querySelector('.signup__faq__container__q-a');

    expect(button).toBeInTheDocument();
    expect(faqcontainer).toHaveClass('opened');
  });
});
