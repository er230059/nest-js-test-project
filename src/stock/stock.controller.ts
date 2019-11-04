import { Controller, Get, Param } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(
    private readonly stockService: StockService
  ) { }

  @Get("realtime/:no")
  realtime(@Param('no') no: string): string {
    this.stockService.recodeViews(no, 'realtime');
    return 'OK'
  }

  @Get("dailyKLine/:no")
  dailyKLine(@Param('no') no: string): string {
    this.stockService.recodeViews(no, 'dailyKLine');
    return 'OK'
  }

  @Get("weeklyKLine/:no")
  weeklyKLine(@Param('no') no: string): string {
    this.stockService.recodeViews(no, 'weeklyKLine');
    return 'OK'
  }

  @Get("monthlyKLine/:no")
  monthlyKLine(@Param('no') no: string): string {
    this.stockService.recodeViews(no, 'monthlyKLine');
    return 'OK'
  }
}
