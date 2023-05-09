import { Injectable } from "@nestjs/common";
import { AuthorFilterDTO } from "../dto/author/authorFilter.dto";
import { Post } from "../models/post.model";

@Injectable()
export class PostService {
  private readonly posts = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Content 1',
      authorId: 1,
      createdAt: new Date(2011, 1, 1),
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Content 2',
      authorId: 2,
      createdAt: new Date(2012, 2, 2),
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'Content 3',
      authorId: 2,
      createdAt: new Date(2013, 3, 3),
    },
  ];

  findOneById(id: number) {
     return this.posts.find((post) => post.id === id);
  }

  findAll(filterDTO: AuthorFilterDTO): Post[] {
    const { authorId } = filterDTO;

    if (authorId) {
      return this.posts.filter((post) => post.authorId === authorId);
    }

    return this.posts
  }
}
