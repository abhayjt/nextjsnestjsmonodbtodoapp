import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Todo {
  @Prop()
  title: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop()
  userId: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);