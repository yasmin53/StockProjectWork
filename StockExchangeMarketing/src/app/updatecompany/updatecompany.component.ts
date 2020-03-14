import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {


  updateCompany:FormGroup;
  constructor(private formBuilder:FormBuilder,private companyService:CompanyService,private router:Router) { }

  ngOnInit() {


    this.updateCompany=this.formBuilder.group({
      id:[],
     companyname:['',Validators.required],
     ceo:['',Validators.required],
      boardOfDirector:['',Validators.required],
      noe:['',Validators.required],
      sector:['',Validators.required],
      turnover:['',Validators.required]
    } 
    );

    const id=localStorage.getItem('companyId');

    if(+id>0){
      this.companyService.getCompanyById(+id).subscribe(company =>{
        this.updateCompany.patchValue(company);

      });
    }
  }
  updateTheCompany(){
    this.companyService.updateCompanyInfo(this.updateCompany.value).subscribe(u=>{
  this.router.navigate(['company']);
    });
  }
  }


