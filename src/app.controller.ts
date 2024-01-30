import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import Resp from './Model/Resp';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Resp {
    return this.appService.getHello();
  }

  @Post()
  postStart(): string {
    return this.appService.postStart();
  }
}
