import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';

import { AppService } from './app.service';
import { DbService } from './db/db.service';

class HelloWorldDto {
  @ApiProperty()
  message: string;
}
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private DbService: DbService,
  ) {}

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  async getHello(): Promise<HelloWorldDto> {
    const users = await this.DbService.user.findMany({});
    console.log(users);
    return { message: this.appService.getHello() };
  }
}
