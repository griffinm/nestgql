import { Resolver, Query, Args } from "@nestjs/graphql";
import { Post } from "../models/post.model";
import { PostService } from "../services/post.service";

@Resolver(of => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(returns => Post)
  async post(@Args('id') id: string): Promise<Post> {
    return this.postService.findOneById(id);
  }

  @Query(returns => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.findAll();
  }
}
