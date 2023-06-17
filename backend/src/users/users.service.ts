import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: ({ password: string; userId: number; username: string } | {
    password: string;
    userId: number;
    username: string
  })[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }
}
