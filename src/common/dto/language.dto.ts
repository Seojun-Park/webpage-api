import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@InputType()
export class LanguageInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  level: string;
}

@ObjectType()
export class LanguageType {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  level: string;
}

@Schema()
export class Language extends Document {
  @Prop()
  title: string;

  @Prop()
  level: string;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
