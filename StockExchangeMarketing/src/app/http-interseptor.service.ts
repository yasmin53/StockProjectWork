import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterseptorService implements HttpInterceptor{
  constructor(public auth:AuthService) { }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    console.log("inside interceptor");
    if(this.auth.getAuthenticationToken()){
      //request cannot be directly manipulated
      //it has to be cloned
      let authenticationToken=this.auth.getAuthenticationToken();
      request=request.clone({
        setHeaders:{
          Authorization: authenticationToken
        }
      });
    }
        return next.handle(request);
  }
}