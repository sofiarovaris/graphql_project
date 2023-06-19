import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
    @InjectRepository(User)
    private userRepository: Repository<User>;

    async getUserById(id: number) {
        return await this.userRepository.findOneBy({ id });
    }

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async createUser(createUserInput: CreateUserInput) {
        const newUser = this.userRepository.create(createUserInput);
        return await this.userRepository.save(newUser);
    }

    async updateUser(id: number, updateUserInput: UpdateUserInput) {
        const user = await this.userRepository.findOneBy({ id });
        return await this.userRepository.save({
            ...user,
            ...updateUserInput
        });
    }

    async deleteUser(id: number) {
        const user = await this.userRepository.findOneBy({ id });
        const deletedUser = await this.userRepository.delete(user);
        if (!deletedUser) {
            return false;
        }
        return true;
    }
}
