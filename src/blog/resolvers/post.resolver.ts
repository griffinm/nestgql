import { Resolver, Query, Args, ResolveField, Parent } from "@nestjs/graphql";
import { Post } from "../models/post.model";
import { PostService } from "../services/post.service";
import { Author } from "../models/author.model";
import { AuthorService } from "../services/author.service";

@Resolver(of => Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly authorService: AuthorService,
  ) {}

  @Query(returns => Post)
  async post(@Args('id') id: number): Promise<Post> {
    return this.postService.findOneById(id);
  }

  @Query(returns => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.findAll({});
  }

  @ResolveField('author', returns => Author)
  async getAuthor(@Parent() post: Post) {
    const { authorId } = post;
    return this.authorService.findOneById(authorId);
  }
}
