import {
  IEvent,
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
    public author: IEventTalkAuthor
  ) {}

  static fromMarkdown(markdown: any) {
    return new EventTalk(
      markdown.title,
      markdown.abstract.split('\n'),
      EventTalkAuthor.fromMarkdown(markdown.author)
    );
  }
}

export class Event implements IEvent {
  constructor(
    public title: string,
    public description: string[],
    public date: Date,
    public pastEvent: boolean,
    public youtubeUrl: string,
    public googleCalendarUrl: string,
    public talks: IEventTalk[]
  ) {}

  static fromMarkdown(markdown: any) {
    return new Event(
      markdown.title,
      markdown.description.split('\n'),
      new Date(markdown.date),
      Date.parse(markdown.date) < Date.now(),
      markdown.youtubeUrl,
      markdown.googleCalendarUrl,
      markdown.talks.map((talk: any) => EventTalk.fromMarkdown(talk))
    );
  }
}