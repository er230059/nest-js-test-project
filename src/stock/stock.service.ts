import { Injectable, Inject } from '@nestjs/common';
import { RedisClient } from 'redis';

@Injectable()
export class StockService {
  constructor(
    @Inject("REDIS") private readonly redis: RedisClient
  ) { }

  private getPrefixTimeString() {
    let d = new Date();
    return `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}${d.getHours()}`;
  }

  async recodeViews(no: string, type: string): Promise<void> {
    let key = `${this.getPrefixTimeString()}_${type}`;
    await Promise.all([
      this.redis.hincrby(key, no, 1),
      this.redis.hincrby(key, 'sum', 1),
    ]);
  }
}
