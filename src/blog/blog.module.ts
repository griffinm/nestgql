import { Module } from '@nestjs/common';
import { AuthorResolver } from './resolvers/author.resolver';
import { AuthorService } from './services/author.service';

@Module({
  providers: [AuthorResolver, AuthorService]
})
export class BlogModule {}
