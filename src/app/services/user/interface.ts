export interface UserAboutInterface {
  bio: string;
  businessEmail: string;
}

export interface CollectionInterface {
  id: string;
  name: string;
  description: string;
  dateCreated: Date;
  dateUpdated: Date;
  articles: string[];
}

export interface UserInterface {
  id: string;
  name: string;
  email: string;
  ladoo: number;
  profileImg: string;
  coverImg: string;
  dateJoined: Date;
  followers: string[];
  following: string[];
  profileSections: { [key: string]: string[] };
  collections: { [key: string]: CollectionInterface };
  about: UserAboutInterface;
}
