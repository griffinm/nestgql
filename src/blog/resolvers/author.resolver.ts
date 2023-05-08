import { Args, Resolver, Query } from '@nestjs/graphql';
import { AuthorService } from '../services/author.service';
import { Author } from '../models/author.model';

@Resolver(of => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(returns => Author)
  async author(@Args('id') id: string): Promise<Author> {
    return this.authorService.findOneById('1');
  }

  @Query(returns => [Author])
  async authors(): Promise<Author[]> {
    return this.authorService.findAll();
  }
}
