import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('register_user')
  async registerUser(@Payload() user) {
    console.log('Receving at user service ');
    console.log(user);
    return user;
  }
}
