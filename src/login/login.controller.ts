import { Controller, Post, Request, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(AuthGuard('local'))
  @Post()
  login(@Request() req) {
    return this.authService.login(req.user);
  }
}
