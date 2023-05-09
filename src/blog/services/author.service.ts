import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Author, Prisma } from '@prisma/client';

@Injectable()
export class AuthorService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  private readonly authors = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
    },
  ];

  findOneById(id: number) {
    return this.authors.find((author) => author.id === id);
  }

  author(
    authorWhereUniqueInput: Prisma.AuthorWhereUniqueInput,
  ): Promise<Author | null> {
    return this.prisma.author.findUnique({
      where: authorWhereUniqueInput,
    });
  }

  findAll() {
    return this.authors;
  }
}
