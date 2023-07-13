import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
