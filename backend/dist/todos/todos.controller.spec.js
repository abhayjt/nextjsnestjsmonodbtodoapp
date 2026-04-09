"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const todos_controller_1 = require("./todos.controller");
describe('TodosController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [todos_controller_1.TodosController],
        }).compile();
        controller = module.get(todos_controller_1.TodosController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=todos.controller.spec.js.map