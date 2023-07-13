import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@InputType()
export class ContactInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  url: string;
}

@ObjectType()
export class ContactType {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: false })
  url: string;
}

@Schema()
export class Contact extends Document {
  @Prop()
  title: string;

  @Prop()
  url: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
