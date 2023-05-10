import { Args, Resolver, Query, Parent, ResolveField, Mutation } from '@nestjs/graphql';
import { Post } from '../models/post.model';
import { PrismaService } from '../services/prisma.service';
import { CreateAuthorInput } from '../dto/author/createAuthor.input';
import { isObject } from 'class-validator';
import { UpdateAuthorInput } from '../dto/author/author-update.input';
import { Author } from '@prisma/client';
@Resolver(of => 'Author')
export class AuthorResolver {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  @Query(returns => 'Authors')
  async authors(
    @Args(({ name: 'firstName', type: () => String, nullable: true })) firstName: string,
    @Args(({ name: 'lastName', type: () => String, nullable: true })) lastName: string,
  ): Promise<Author[]> {
    return this.prisma.author.findMany({ where: { firstName, lastName } });
  }

  @Query('Author')
  async author(@Args('id') id: number): Promise<Author> {
    return this.prisma.author.findUnique({ where: { id } });
  }

  @Mutation('Author')
  async createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput
  ) {
    return await this.prisma.author.create({ data: {...createAuthorInput} });
  }

  @Mutation('Author')
  async updateAuthor(
    @Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput
  ) {
    return this.prisma.author.update({ 
      where: { id: updateAuthorInput.id }, 
      data: {...updateAuthorInput} 
    });
  }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.prisma.post.findMany({ where: { authorId: id } });
  }
}
