import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Author, Prisma } from '@prisma/client';

@Injectable()
export class AuthorService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}
  
  async getAuthor(params: { where: Prisma.AuthorWhereUniqueInput }) : Promise<Author | null> {
    const { where } = params;
    return this.prisma.author.findUnique({ where });
  }

  async getAuthors(params: { where?: Prisma.AuthorWhereInput }) : Promise<Author[]> {
    const { where } = params;
    return this.prisma.author.findMany({ where });
  }

  async createAuthor(
    params: { 
      firstName: Author['firstName'],
      lastName: Author['lastName'],
    }
  ) : Promise<Author> {
    const { firstName, lastName } = params;
    const author = await this.prisma.author.create({
      data: {
        firstName,
        lastName,
      }
    });
    return author;
  }
}
