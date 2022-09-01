export class ButtonModel {
  href: string;
  label: string;

  constructor(href: string, label: string) {
    this.href = href;
    this.label = label;
  }
}

export class EventModel {
  title: string;
  year: string;
  details: string;

  constructor(title: string, year: string, details: string) {
    this.title = title;
    this.year = year;
    this.details = details;
  }
}
