import { Controller, Patch,Get, Post, Delete, Body, Req, Param, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from '../guards/jwt.guard';

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodosController {
  constructor(private service: TodosService) {}

  @Post()
  create(@Body() body, @Req() req) {
    return this.service.create(body, req.user.id);
  }

  @Get()
  findAll(@Req() req) {
    console.log("Userdya",req.user.id);
    
    return this.service.findAll(req.user.id);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.service.delete(id);
  }

@Patch(':id')   
  update(@Param('id') id: string, @Body() body) {
    return this.service.update(id, body);
  }
}