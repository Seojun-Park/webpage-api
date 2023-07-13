import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@InputType()
export class AttachementInput {
  @Field(() => String, { nullable: false })
  fileName: string;

  @Field(() => String, { nullable: false })
  url: string;

  @Field(() => String, { nullable: false })
  title: string;
}

@ObjectType()
export class AttachmentType {
  @Field(() => String, { nullable: false })
  fileName: string;

  @Field(() => String, { nullable: false })
  url: string;

  @Field(() => String, { nullable: false })
  title: string;
}

@Schema()
export class Attachment extends Document {
  @Prop()
  fileName: string;

  @Prop()
  url: string;

  @Prop()
  title: string;
}

export const AttachmentSchema = SchemaFactory.createForClass(Attachment);
