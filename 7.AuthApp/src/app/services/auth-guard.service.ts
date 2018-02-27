import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate } from "@angular/router";

import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(next);
    console.log(state);
    if(this.auth.isAuthenticated()){
      console.log('ha pasado por el guard');
      return true;
    }else{
      console.log('Bloqueado por el guard');
      return false;
    }
  }
}
