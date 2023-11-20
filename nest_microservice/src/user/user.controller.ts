import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(
    @Inject('user_services') private readonly clientProxy: ClientProxy,
  ) {}

  @Post()
  async getUsers(@Body() user) {
    console.log('Sending from microservice');
    console.log(user);
    console.log(this.clientProxy);
    return this.clientProxy.send('register_user', {
      ...user,
      name: 'chhetri',
    });
  }
}
