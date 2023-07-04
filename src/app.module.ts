import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Hobby } from './entities/hobby.entity';
import { UserModule } from './modules/user/user.module';
import { HobbyModule } from './modules/hobby/hobby.module';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'rootdevpass',
      database: 'graphql',
      entities: [User, Hobby],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UserModule,
    HobbyModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
