export interface IEventTalkAuthor {
  name: string;
  company: string;
  avatar: string;
  twitter: string;
  github: string;
  bio: string[];
}

export interface IEventTalk {
  title: string;
  abstract: string[];
  duration: string;
  author: IEventTalkAuthor;
}

export interface IEvent {
  title: string;
  description: string[];
  date: Date;
  pastEvent: boolean;
  youtubeUrl: string;
  googleCalendarUrl: string;
  talks: IEventTalk[];
}
