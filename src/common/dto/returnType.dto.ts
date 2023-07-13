import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Experience } from '../../experience/entities/experience.entity';
import { Work } from '../../work/entities/work.entity';
import { User } from '../../user/entities/user.entity';

function ReturnResult<T>(ItemType: Type<T>) {
  @ObjectType({ isAbstract: true })
  abstract class ReturnClass {
    @Field(() => [ItemType])
    data: T[];

    @Field(() => Int)
    total: number;
  }
  return ReturnClass;
}

@ObjectType()
export class ExperiencesReturnType extends ReturnResult(Experience) {}

@ObjectType()
export class WorksReturnType extends ReturnResult(Work) {}

@ObjectType()
export class UsersReturnType extends ReturnResult(User) {}

@ObjectType()
export class CountType {
  @Field(() => String)
  date: string;

  @Field(() => String)
  count: string;
}

@ObjectType()
export class UserCountType {
  @Field(() => [User])
  data: User[];

  @Field(() => String)
  date: string;

  @Field(() => String)
  count: string;
}

@ObjectType()
export class ExperienceCountType {
  @Field(() => [Experience])
  data: Experience[];

  @Field(() => String)
  date: string;

  @Field(() => String)
  count: string;
}

@ObjectType()
export class WorkCountType {
  @Field(() => [Work])
  data: Work[];

  @Field(() => String)
  date: string;

  @Field(() => String)
  count: string;
}
