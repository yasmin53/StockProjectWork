import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-addnewcompany',
  templateUrl: './addnewcompany.component.html',
  styleUrls: ['./addnewcompany.component.css']
})
export class AddnewcompanyComponent implements OnInit {

  registerCompany:FormGroup;

  constructor(private formBuilder:FormBuilder,private companyService:CompanyService) { }

  ngOnInit() {

    this.registerCompany=this.formBuilder.group({

      id: ['', Validators.required],
      companyname: ['', Validators.required],
      ceo: ['', Validators.required],
      boardOfDirector: ['', Validators.required],
      noe: ['', Validators.required],
      sector: ['', Validators.required],
      turnover: ['', Validators.required]
      
      
    });


  }


  addCompany(){
    this.companyService.saveCompany(this.registerCompany.value).subscribe(data =>
      {
        console.log('User Inserted Successfully'+data);
      });

  }

  onSubmit(){
    console.log(this.registerCompany.value);
  }

}
                                                