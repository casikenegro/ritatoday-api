import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req){
    if(!req.user){
      return 'No user from google'
    }
    return {
      message: 'User Info from Goolge',
      user: req.user
    }
  }


  
}
