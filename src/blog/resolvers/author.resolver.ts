import { Args, Resolver, Query, Parent, ResolveField, Mutation } from '@nestjs/graphql';
import { AuthorService } from '../services/author.service';
import { Author } from '../models/author.model';
import {
  Author as AuthorModel 
} from '@prisma/client'
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Resolver(of => Author)
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService,
    private readonly postService: PostService,
  ) {}

  @Query(returns => Author)
  async author(@Args('id') id: number): Promise<AuthorModel> {
    // return this.authorService.findOneById(id);
    return this.authorService.author({ id });
  }

  @Query(returns => [Author])
  async authors(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postService.findAll({ authorId: id });
  }
}
