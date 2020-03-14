import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
registerUser:FormGroup;
  constructor(private formBuilder:FormBuilder,private userService:UserService) { }
  
  ngOnInit() {

    this.registerUser=this.formBuilder.group({

      id: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      
    });








  }


  addUser(){
    this.userService.saveUser(this.registerUser.value).subscribe(data =>
      {
        console.log('User Inserted Successfully'+data);
      });

  }

  onSubmit(){
    console.log(this.registerUser.value);
  }

}
