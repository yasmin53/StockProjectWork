import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from '../models/companies';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comparecompanies',
  templateUrl: './comparecompanies.component.html',
  styleUrls: ['./comparecompanies.component.css']
})
export class ComparecompaniesComponent implements OnInit {
  compareCompany:FormGroup;
  companies:Company[];
  constructor(private formBuilder:FormBuilder,private router:Router, private companyService:CompanyService) { }
  ngOnInit() {
    this.compareCompany=this.formBuilder.group({
      csselect: ['',Validators.required],
      seselect: ['',Validators.required],
      cnsn: ['',Validators.required],
      ctcnsn: ['',Validators.required],
      fperiod: ['',Validators.required],
      tperiod: ['',Validators.required],
     });
     this.companyService.getAllCompanies().subscribe(data=>{
      this.companies=data;
    });
  }
  onSubmit() {
    this.router.navigate(["/charts"],{
      queryParams:{
        formData: JSON.stringify(this.compareCompany.value)
      }
    });
  }
  // getAllCompanies(){
  //   this.companyService.getAllCompanies().subscribe(data=>{
  //     this.companies=data;
  //   })
  // }
}