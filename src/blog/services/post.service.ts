import { Injectable } from "@nestjs/common";

@Injectable()
export class PostService {
  private readonly posts = [
    {
      id: '1',
      title: 'Post 1',
      content: 'Content 1',
      authorId: '1',
      createdAt: new Date(2011, 1, 1),
    },
    {
      id: '2',
      title: 'Post 2',
      content: 'Content 2',
      authorId: '2',
      createdAt: new Date(2012, 2, 2),
    },
    {
      id: '3',
      title: 'Post 3',
      content: 'Content 3',
      authorId: '2',
      createdAt: new Date(2013, 3, 3),
    },
  ];

  findOneById(id: string) {
     return this.posts.find((post) => post.id === id);
  }

  findAll() {
    return this.posts;
  }
}
