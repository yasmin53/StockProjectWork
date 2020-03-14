import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUser:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }
  ngOnInit() {
    this.updateUser=this.formBuilder.group({
      id:[],
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      
    }
    );

    const id=localStorage.getItem('userId');

    if(+id>0){
      this.userService.getUserById(+id).subscribe(user =>{
        this.updateUser.patchValue(user);

      });
    }
  }
  updateTheUser(){
    this.userService.updateUserInfo(this.updateUser.value).subscribe(u=>{
  this.router.navigate(['users']);
    })
  }

}
