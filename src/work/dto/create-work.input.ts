import { InputType, Field } from '@nestjs/graphql';
import { AttachmentType } from '../../common/dto/attachment.dto';
import { StackType } from '../../common/dto/stack.dto';

@InputType()
export class CreateWorkInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => String, { nullable: true })
  repositoryLink?: string | null;

  @Field(() => [AttachmentType], { nullable: true })
  attachments?: Record<string, string>[] | null;

  @Field(() => [StackType], { nullable: true })
  stacks?: Record<string, string>[] | null;
}
