import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { HobbyModule } from '../hobby/hobby.module';

@Module({
    imports: [TypeOrmModule.forFeature([
        User,
    ]),
        HobbyModule,
    ],
    providers: [UserService, UserResolver],
})
export class UserModule { }
