import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App } from './app.entity';
import { LoginModule } from './login/login.module';
import { StockController } from './stock/stock.controller';
import { StockService } from './stock/stock.service';
import * as redis from 'redis';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([App]), LoginModule],
  controllers: [AppController, StockController],
  providers: [
    AppService,
    StockService,
    {
      provide: "REDIS", useFactory: () => {
        const redisClient = redis.createClient();
        return redisClient;
      }
    },
  ],
})
export class AppModule { }
