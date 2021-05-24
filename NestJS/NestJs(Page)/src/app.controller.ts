import { Controller, Get, Render } from '@nestjs/common';


@Controller()
export class AppController {

  @Get()
  @Render('index')
  root()
  {
    return { message : 'Hello My name is Inho' };
  }

  @Get('inho')
  @Render('inho')
  ins()
  {
    return { message : "Two page"};
  }

  @Get('inho/a1')
  @Render('a1')
  ins2()
  {
    return { message : "Two by Two page"};
  }
}
