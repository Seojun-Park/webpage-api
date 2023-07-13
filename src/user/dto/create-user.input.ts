import { InputType, Field } from '@nestjs/graphql';
import { ContactType } from '../../common/dto/contact.dto';
import { LanguageType } from '../../common/dto/language.dto';
import { EducationType } from '../../common/dto/education.dto';
import { AttachmentType } from '../../common/dto/attachment.dto';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  intro: string;

  @Field(() => String, { nullable: false })
  thumbnail: string;

  @Field(() => [ContactType], { nullable: true })
  contacts?: Record<string, string>[] | null;

  @Field(() => [LanguageType], { nullable: true })
  languages?: Record<string, string>[] | null;

  @Field(() => [EducationType], { nullable: true })
  educations?: Record<string, string>[] | null;

  @Field(() => [AttachmentType], { nullable: true })
  attachments?: Record<string, string>[] | null;
}
