import { InputType, Field } from '@nestjs/graphql';
import { StackType } from '../../common/dto/stack.dto';

@InputType()
export class CreateExperienceInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => String, { nullable: true })
  link?: string | null;

  @Field(() => [StackType], { nullable: true })
  stacks?: Record<string, string>[] | null;

  @Field(() => Date, { nullable: false })
  startedAt: Date;

  @Field(() => Date, { nullable: true })
  endAt?: Date | null;
}
