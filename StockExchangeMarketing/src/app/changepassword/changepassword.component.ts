import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private service: UserService, private router: Router) { }
  ngOnInit() {
    this.changePasswordForm=this.formBuilder.group({
      old_password:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required]
    })
  }
  updateThePassword(){
    let old=this.changePasswordForm.controls.old_password.value;
    let pass=this.changePasswordForm.controls.password.value;
    let confirm=this.changePasswordForm.controls.confirm_password.value;
    let userId=sessionStorage.getItem("userId");
    this.service.getUserById(+userId).subscribe(u=>{
      if(u.password===old){
        if(pass===confirm){
          u.password=pass;
          this.service.updateUserInfo(u).subscribe(us=>{
            alert("password changed successfully")
            this.router.navigate(['/logout'])
          })
        }
      }else{
        alert("old password doesnt match")
      }
    })
  }
}