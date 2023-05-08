import { Module } from '@nestjs/common';
import { AuthorResolver } from './resolvers/author.resolver';
import { AuthorService } from './services/author.service';
import { PostResolver } from './resolvers/post.resolver';
import { PostService } from './services/post.service';

@Module({
  providers: [
    AuthorResolver,
    AuthorService,
    PostResolver,
    PostService,
  ]
})
export class BlogModule {}
