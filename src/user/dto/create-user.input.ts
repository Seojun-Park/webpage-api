import { InputType, Field } from '@nestjs/graphql';
import { ContactInput } from '../../common/dto/contact.dto';
import { LanguageInput } from '../../common/dto/language.dto';
import { EducationInput } from '../../common/dto/education.dto';
import { AttachementInput } from '../../common/dto/attachment.dto';

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

  @Field(() => [ContactInput], { nullable: true })
  contacts?: Record<string, string>[] | null;

  @Field(() => [LanguageInput], { nullable: true })
  languages?: Record<string, string>[] | null;

  @Field(() => [EducationInput], { nullable: true })
  educations?: Record<string, string>[] | null;

  @Field(() => [AttachementInput], { nullable: true })
  attachments?: Record<string, string>[] | null;
}
