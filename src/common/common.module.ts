import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './mongo.module';
import { GraphqlModule } from './graphql.module';

@Module({
  imports: [ConfigModule, MongoModule, GraphqlModule],
  exports: [ConfigModule, MongoModule, GraphqlModule],
})
export class CommonModule {}
