import { Resolver, Query, Args, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { Post } from "../models/post.model";
import { PrismaService } from "../services/prisma.service";
import { Author } from "../models/author.model";
import { CreatePostInput } from "../dto/post/create-post.input";

@Resolver(() => Post)
export class PostResolver {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => [Post])
  async posts(
    @Args(({ name: 'title', type: () => String, nullable: true })) title: string,
    @Args(({ name: 'authorId', type: () => Number, nullable: true })) authorId: number,
  ): Promise<Post[]> {
    return this.prisma.post.findMany({ where: { title, authorId } });
  }

  @Query(() => Post)
  async post(@Args('id') id: number): Promise<Post> {
    return this.prisma.post.findUnique({ where: { id } });
  }

  @Mutation(() => Post)
  async createPost(
    @Args('createPostInput') createPostInput : CreatePostInput,
  ) : Promise<Post> {
    return this.prisma.post.create({ data: { ...createPostInput } });
  }

  @ResolveField('author', returns => Author)
  async getAuthor(@Parent() post: Post) {
    const { id } = post;
    return this.prisma.author.findUnique({ where: { id } });
  }
}
