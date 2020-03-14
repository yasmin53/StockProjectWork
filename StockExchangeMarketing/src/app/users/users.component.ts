import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService, private router:Router,private formBuilder:FormBuilder) { }

  users: User[];

  ngOnInit() {

    this.userService.getAllUsers().subscribe(data =>{

      this.users=data;
    }); 
  }

  deleteUser(user:User){
this.userService.deleteUser(user.id).subscribe();
this.users=this.users.filter(u => u !==user);
  }
 updateUser(user:User){
  localStorage.removeItem('userId');
  localStorage.setItem('userId',user.id.toString());
  this.router.navigate(['update-user']);
 }
}
