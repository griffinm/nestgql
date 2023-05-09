import { Args, Resolver, Query, Parent, ResolveField, Mutation } from '@nestjs/graphql';
import { Author } from '../models/author.model';
import { Post } from '../models/post.model';
import { PrismaService } from '../services/prisma.service';
@Resolver(of => Author)
export class AuthorResolver {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  @Query(returns => [Author])
  async authors(
    @Args(({ name: 'firstName', type: () => String, nullable: true })) firstName: string,
    @Args(({ name: 'lastName', type: () => String, nullable: true })) lastName: string,
  ): Promise<Author[]> {
    return this.prisma.author.findMany({ where: { firstName, lastName } });
  }

  @Query(returns => Author)
  async author(@Args('id') id: number): Promise<Author> {
    return this.prisma.author.findUnique({ where: { id } });
  }

  @Mutation(() => Author)
  async createAuthor(
    @Args(({ name: 'firstName', type: () => String })) firstName: string,
    @Args(({ name: 'lastName', type: () => String })) lastName: string,
  ) {
    return this.prisma.author.create({ data: { firstName, lastName } });
  }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.prisma.post.findMany({ where: { authorId: id } });
  }
}
