import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  private readonly authors = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Doe',
    },
  ];

  findOneById(id: string) {
    return this.authors.find((author) => author.id === id);
  }

  findAll() {
    return this.authors;
  }
}
