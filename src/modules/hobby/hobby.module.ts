import { Hobby } from '../../entities/hobby.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HobbyResolver } from './hobby.resolver';
import { HobbyService } from './hobby.service';

@Module({
    imports: [TypeOrmModule.forFeature([
        Hobby,
    ]),
    ],
    providers: [HobbyService, HobbyResolver],
    exports: [HobbyService],
})
export class HobbyModule { }
