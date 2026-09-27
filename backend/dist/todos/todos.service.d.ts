import { Model } from 'mongoose';
import { Todo } from './todo.schema';
export declare class TodosService {
    private model;
    constructor(model: Model<Todo>);
    create(data: any, userId: any): Promise<import("mongoose").Document<unknown, {}, Todo, {}, import("mongoose").DefaultSchemaOptions> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(userId: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Todo, {}, import("mongoose").DefaultSchemaOptions> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, Todo, {}, import("mongoose").DefaultSchemaOptions> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, Todo, "find", {}>;
    delete(id: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Todo, {}, import("mongoose").DefaultSchemaOptions> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, import("mongoose").Document<unknown, {}, Todo, {}, import("mongoose").DefaultSchemaOptions> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, Todo, "findOneAndDelete", {}>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, Todo, {}, import("mongoose").DefaultSchemaOptions> & Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
