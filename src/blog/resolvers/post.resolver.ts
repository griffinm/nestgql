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
}
