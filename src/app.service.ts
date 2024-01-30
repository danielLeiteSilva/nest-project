import { Injectable } from '@nestjs/common';
import Resp from './Model/Resp';

@Injectable()
export class AppService {
  getHello(): Resp {
    return {
      ok: 'Teste',
      value: true,
    };
  }
  postStart(): string {
    return `Test`;
  }
}
