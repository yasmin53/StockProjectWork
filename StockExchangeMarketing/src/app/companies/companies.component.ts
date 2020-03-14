import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Company } from '../models/companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor(private companyService:CompanyService, private router:Router,private formBuilder:FormBuilder) { }

  companies:Company[];
  ngOnInit() {



    this.companyService.getAllCompanies().subscribe(data =>{

      this.companies=data;
  });
}


deleteCompany(company:Company){
  this.companyService.deleteCompany(company.id).subscribe();
  this.companies=this.companies.filter(u => u !==company);
    }
   updateCompany(company:Company){
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId',company.id.toString());
    this.router.navigate(['updatecompany']);
   }



}
