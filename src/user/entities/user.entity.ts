import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { LanguageSchema, LanguageType } from '../dto/language.dto';
import { EducationSchema, EducationType } from '../dto/education.dto';
import { AttachmentType } from '../dto/attachment.dto';
import { ContactSchema, ContactType } from '../dto/contact.dto';

@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { nullable: false })
  title: string;

  @Prop()
  @Field(() => String, { nullable: false })
  email: string;

  @Prop()
  @Field(() => String, { nullable: false })
  intro: string;

  @Prop()
  @Field(() => String, { nullable: false })
  thumbnail: string;

  @Prop({ text: [ContactSchema] })
  @Field(() => [ContactType], { nullable: true })
  contacts?: Record<string, string>[] | null;

  @Prop({ type: [LanguageSchema] })
  @Field(() => [LanguageType], { nullable: true })
  languages?: Record<string, string>[] | null;

  @Prop({ type: [EducationSchema] })
  @Field(() => [EducationType], { nullable: true })
  education?: Record<string, string>[] | null;

  @Prop({ type: [AttachmentType] })
  @Field(() => [AttachmentType], { nullable: true })
  attachments?: Record<string, string>[] | null;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt!: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
