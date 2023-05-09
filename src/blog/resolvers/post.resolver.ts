import { Resolver, Query, Args, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { Post } from "../models/post.model";
import { PrismaService } from "../services/prisma.service";

@Resolver(() => Post)
export class PostResolver {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => [Post])
  async posts(
    @Args(({ name: 'title', type: () => String, nullable: true })) title: string,
  ): Promise<Post[]> {
    return this.prisma.post.findMany({ where: { title } });
  }

  @Query(() => Post)
  async post(@Args('id') id: number): Promise<Post> {
    return this.prisma.post.findUnique({ where: { id } });
  }

  @Mutation(() => Post)
  async createPost(
    @Args(({ name: 'title', type: () => String })) title: string,
    @Args(({ name: 'content', type: () => String, nullable: true })) content: string,
    @Args(({ name: 'authorId', type: () => Number })) authorId: number,
  ) : Promise<Post> {
    return this.prisma.post.create({ data: { title, content, authorId } });
  }
}
