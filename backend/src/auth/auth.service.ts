import { Injectable,UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User } from '../users/user.schema';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const user = await this.userModel.create({ ...data, password: hash });
    return user;
  }


  async login(data) {
  const user = await this.userModel.findOne({ email: data.email });

 
  if (!user) {
    throw new UnauthorizedException('User not found');
  }

  const match = await bcrypt.compare(data.password, user.password);

  if (!match) {
    throw new UnauthorizedException('Invalid password');
  }

  const token = this.jwtService.sign({ id: user._id });

  return { token };
}

  
}