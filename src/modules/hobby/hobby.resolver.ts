import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Hobby } from 'src/entities/hobby.entity';
import { AddHobbyInput } from './dto/add-hobby.input';
import { HobbyService } from './hobby.service';

@Resolver(of => Hobby)
export class HobbyResolver {
    constructor(
        private hobbyService: HobbyService,
    ) { }

    @Mutation(returns => Hobby)
    async addHobby(@Args('id') id: number, @Args('addHobbyInput') addHobbyInput: AddHobbyInput) {
        return await this.hobbyService.addHobby(id, addHobbyInput);
    }
}
