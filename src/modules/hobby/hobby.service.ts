import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hobby } from 'src/entities/hobby.entity';
import { Repository } from 'typeorm';
import { AddHobbyInput } from './dto/add-hobby.input';
import { User } from 'src/entities/user.entity';

@Injectable()
export class HobbyService {
    @InjectRepository(Hobby)
    private hobbyRepository: Repository<Hobby>;

    async addHobby(id: number, addHobbyInput: AddHobbyInput) {
        const newHobby = this.hobbyRepository.create({
            ...addHobbyInput,
            user: {
                id,
            }
        });
        return await this.hobbyRepository.save(newHobby);
    }

    async getUserHobbies(user: User) {
        return await this.hobbyRepository.find({
            where: {
                user
            }
        });
    }
}
