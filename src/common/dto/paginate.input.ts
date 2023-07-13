import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
class SortType {
  @Field(() => String, { nullable: false })
  field: string;

  @Field(() => String, { nullable: false })
  order: string;
}

@InputType()
export class PaginationArgs {
  @Field(() => Int)
  skip = 0;

  @Field(() => Int)
  take = 25;

  @Field(() => SortType, { nullable: true })
  sort?: Record<keyof SortType, string>;
}
