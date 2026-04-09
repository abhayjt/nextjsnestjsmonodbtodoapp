"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const todos_service_1 = require("./todos.service");
describe('TodosService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [todos_service_1.TodosService],
        }).compile();
        service = module.get(todos_service_1.TodosService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=todos.service.spec.js.map