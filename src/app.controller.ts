import { Controller, Delete, Get, Param, Post, Body, ParseIntPipe, UseGuards, ValidationPipe, UsePipes, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { App } from './app.entity';
import { AppModel, AppCreate, AppDelete } from './app.class'
import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@UseGuards(AuthGuard('jwt'))
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }

  @Delete(':id')
  @ApiOperation({ title: 'Delete data of specific id' })
  @ApiResponse({
    status: 200,
    type: AppDelete,
  })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<object> {
    console.log(typeof id);
    return await this.appService.remove(id);
  }

  @Get()
  @ApiOperation({ title: 'Get all datas' })
  @ApiResponse({
    status: 200,
    type: [AppModel],
  })
  async findAll(): Promise<App[]> {
    return await this.appService.findAll();
  }

  @Get(':id')
  @ApiOperation({ title: 'Get data of specific id' })
  @ApiResponse({
    status: 200,
    type: [AppModel],
  })
  async find(@Param('id') id: number): Promise<App[]> {
    return await this.appService.find(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @ApiOperation({ title: 'Create data' })
  @ApiResponse({
    status: 201,
    type: AppModel,
  })
  async create(@Body() data: AppCreate): Promise<App> {
    return await this.appService.create(data);
  }
}
