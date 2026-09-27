import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.schema';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private model: Model<Todo>) {}

  create(data, userId) {
    return this.model.create({ ...data, userId });
  }

  findAll(userId) {
    console.log("User_id",userId);
    return this.model.find({ userId });
  }

  delete(id) {
    return this.model.findByIdAndDelete(id);
  }

  async update(id: string, body: any) {
  return this.model.findByIdAndUpdate(
    id,
    { title: body.title },
    { new: true }
  );
}
}