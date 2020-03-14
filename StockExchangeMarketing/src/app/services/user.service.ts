import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{User} from '../models/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 // httpUrl = http://localhost:8765/user-service/user';
   httpUrl=environment.host+`user-service/user/`;
  constructor(private httpClient: HttpClient,@Inject(HttpClient) private ht) { }
  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }
  saveUser(user:User):Observable<User>{
    return this.ht.post(this.httpUrl, user);
  }
  deleteUser(id:number):Observable<User>{
    return this.ht.delete(environment.host+`user-service/user/${id}`);
  }
  updateUserInfo(user :User):Observable<User>{
    return this.ht.put(environment.host+`user-service/user` , user);
  }
  getUserById(id :number):Observable<User>{
    return this.ht.get(environment.host+`user-service/user/${id}`);
  }
  reg() {
    return this.ht.get(environment.host+`user-service/reg`);
  }
  serActivation(obj) {
    return this.ht.put(environment.host+`user-service/activate`, obj)
  }
  LoggedIn(){
    let user_id = localStorage.getItem('userId');
    if(user_id==null){
      return false;
    }else{
      return true;
    } 
  }
  isActivated(user:User)
  {
    if(user.active == "yes"){
      return true;
    }
}

isAdmin(){
  if (sessionStorage.getItem("userType")=="admin")
  {
    return true;
  }
  else
   {
     return false;
   }
  }
}










