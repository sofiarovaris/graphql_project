import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query((returns) => String)
  async status() {
    return 'API funcionando corretamente!';
  }
}
