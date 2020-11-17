import {
  IEvent,
  IEventSponsor,
  IEventTalk,
  IEventTalkAuthor,
} from '../interfaces/event.interface';

export class EventTalkAuthor implements IEventTalkAuthor {
  constructor(
    public name: string,
    public company: string,
    public avatar: string,
    public twitter: string,
    public github: string,
    public bio: string[]
  ) {}

  static fromMarkdown(markdown: any) {
    return new EventTalkAuthor(
      markdown.name,
      markdown.company,
      markdown.avatar,
      markdown.twitter,
      markdown.github,
      markdown.bio.split('\n')
    );
  }
}

export class EventTalk implements IEventTalk {
  constructor(
    public title: string,
    public abstract: string[],
    public duration: string,
    public author: IEventTalkAuthor
  ) {}

  static fromMarkdown(markdown: any) {
    return new EventTalk(
      markdown.title,
      markdown.abstract.split('\n'),
      markdown.duration,
      EventTalkAuthor.fromMarkdown(markdown.author)
    );
  }
}

export class EventSponsor implements IEventSponsor {
  constructor(public title: string, public logo: string, public url: string) {}

  static fromMarkdown(markdown: any) {
    return new EventSponsor(markdown.title, markdown.logo, markdown.url);
  }
}

export class Event implements IEvent {
  constructor(
    public slug: string,
    public title: string,
    public description: string[],
    public date: Date,
    public pastEvent: boolean,
    public youtubeUrl: string,
    public googleCalendarUrl: string,
    public talks: IEventTalk[],
    public sponsors: IEventSponsor[]
  ) {}

  static fromMarkdown(markdown: any) {
    return new Event(
      markdown.slug,
      markdown.title,
      markdown.description.split('\n'),
      new Date(markdown.date),
      Date.parse(markdown.date) < Date.now(),
      markdown.youtubeUrl,
      markdown.googleCalendarUrl,
      markdown.talks.map((talk: any) => EventTalk.fromMarkdown(talk)),
      markdown.sponsors.map((sponsor: any) =>
        EventSponsor.fromMarkdown(sponsor)
      )
    );
  }
}
