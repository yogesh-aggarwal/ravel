export interface AuthorInterface {
  id: string;
  name: string;
  profileImg: string;
}

export interface ArticleInterface {
  id: string;
  authorId: string;
  author?: AuthorInterface;
  title: string;
  shortDesc: string;
  tags: string[];
  content: object;
  thumbnail: string;
  upvoters: string[];
  downvoters: string[];
  datePublished: Date;
  dateEdited: Date[];
}
