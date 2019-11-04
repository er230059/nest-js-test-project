import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { App } from './app.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(App)
    private readonly appRepository: Repository<App>,
  ) { }

  find(id): Promise<App[]> {
    return this.appRepository.find({ id });
  }

  findAll(): Promise<App[]> {
    return this.appRepository.find();
  }

  async remove(id): Promise<object> {
    let result = await this.appRepository.delete({ id });
    return { affected: result.affected };
  }

  create(data): Promise<App> {
    return this.appRepository.save(data);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
