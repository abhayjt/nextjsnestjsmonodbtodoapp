import { TodosService } from './todos.service';
export declare class TodosController {
    private service;
    constructor(service: TodosService);
    create(body: any, req: any): Promise<import("mongoose").Document<unknown, {}, import("./todo.schema").Todo, {}, import("mongoose").DefaultSchemaOptions> & import("./todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(req: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./todo.schema").Todo, {}, import("mongoose").DefaultSchemaOptions> & import("./todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./todo.schema").Todo, {}, import("mongoose").DefaultSchemaOptions> & import("./todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./todo.schema").Todo, "find", {}>;
    delete(id: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./todo.schema").Todo, {}, import("mongoose").DefaultSchemaOptions> & import("./todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, import("mongoose").Document<unknown, {}, import("./todo.schema").Todo, {}, import("mongoose").DefaultSchemaOptions> & import("./todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./todo.schema").Todo, "findOneAndDelete", {}>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./todo.schema").Todo, {}, import("mongoose").DefaultSchemaOptions> & import("./todo.schema").Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
