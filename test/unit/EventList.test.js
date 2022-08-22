/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import EventList from '../../src/lib/EventList.svelte';
import en from '../../src/i18n/en.json';
import { addMessages, init } from 'svelte-i18n';

addMessages('en', en);
init({ fallbackLocale: 'en', initialLocale: 'en' });

describe('Testing RoadmapEvents Component', () => {
  test('render the content of the Component with one event', () => {
    const { getByText } = render(EventList, {
      eventList: [
        { title: 'EventName', year: '2021', details: 'A detailed description of this event...' }
      ]
    });

    expect(getByText('EventName')).toBeInTheDocument();
    expect(getByText('2021')).toBeInTheDocument();
    expect(getByText('A detailed description of this event...')).toBeInTheDocument();
  });
  test('render the content of the Component with two events', () => {
    const { getByText } = render(EventList, {
      title: 'EventName',
      year: '2021',
      details: 'A detailed description of this event...',
      eventList: [
        { title: 'EventName', year: '2021', details: 'A detailed description of this event...' },
        { title: 'SecondEvent', year: '2030', details: 'More details on the upcoming second event' }
      ]
    });

    expect(getByText('EventName')).toBeInTheDocument();
    expect(getByText('2021')).toBeInTheDocument();
    expect(getByText('A detailed description of this event...')).toBeInTheDocument();

    expect(getByText('SecondEvent')).toBeInTheDocument();
    expect(getByText('2030')).toBeInTheDocument();
    expect(getByText('More details on the upcoming second event')).toBeInTheDocument();
  });
});
