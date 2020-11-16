export interface IEventTalkAuthor {
  name: string;
  company: string;
  avatar: string;
  bio: string[];
}

export interface IEventTalk {
  title: string;
  abstract: string[];
  author: IEventTalkAuthor;
}

export interface IEvent {
  title: string;
  description: string[];
  date: Date;
  pastEvent: boolean;
  youtubeUrl: string;
  talks: IEventTalk[];
}
