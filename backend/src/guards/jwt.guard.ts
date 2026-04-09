import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const token = request.headers.authorization;
    //console.log(" TOKEN:", token);

    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
   // console.log(" USER:", user);

    if (err || !user) {
      console.log(" ERROR:", err || info);
      throw new UnauthorizedException('Invalid token'); 
    }

    return user;
  }
}