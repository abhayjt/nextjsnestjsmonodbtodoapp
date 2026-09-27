export declare class Todo {
    title: string;
    completed: boolean;
    userId: string;
}
export declare const TodoSchema: import("mongoose").Schema<Todo, import("mongoose").Model<Todo, any, any, any, any, any, Todo>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Todo, import("mongoose").Document<unknown, {}, Todo, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    completed?: import("mongoose").SchemaDefinitionProperty<boolean, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    userId?: import("mongoose").SchemaDefinitionProperty<string, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Todo>;
