import { InputType, Field } from '@nestjs/graphql';
import { AttachementInput } from '../../common/dto/attachment.dto';
import { StackInput } from '../../common/dto/stack.dto';

@InputType()
export class CreateWorkInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => String, { nullable: true })
  repositoryLink?: string | null;

  @Field(() => [AttachementInput], { nullable: true })
  images?: Record<string, string>[] | null;

  @Field(() => [AttachementInput], { nullable: true })
  attachments?: Record<string, string>[] | null;

  @Field(() => [StackInput], { nullable: true })
  stacks?: Record<string, string>[] | null;
}
