import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { HobbyService } from '../hobby/hobby.service';

@Resolver(of => User)
export class UserResolver {
    constructor(
        private userService: UserService,
        private hobbyService: HobbyService,
    ) { }

    @Query(returns => User)
    async getUserById(@Args('id') id: number) {
        return await this.userService.getUserById(id);
    }

    @Query(returns => [User])
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }

    @Mutation(returns => User)
    async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return await this.userService.createUser(createUserInput);
    }

    @Mutation(returns => User)
    async updateUser(@Args('id') id: number, @Args('updateUserInput') updateUserInput: UpdateUserInput) {
        return await this.userService.updateUser(id, updateUserInput);
    }

    @Mutation(returns => Boolean)
    async deleteUser(@Args('id') id: number) {
        return await this.userService.deleteUser(id);
    }

    @ResolveField()
    async hobbies(@Parent() user: User) {
        return await this.hobbyService.getUserHobbies(user);
    }
}
