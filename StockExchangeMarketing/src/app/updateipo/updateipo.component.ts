import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IpoService } from '../ipo.service';

@Component({
  selector: 'app-updateipo',
  templateUrl: './updateipo.component.html',
  styleUrls: ['./updateipo.component.css']
})
export class UpdateipoComponent implements OnInit {
  updateIPO:FormGroup;

  constructor(private formBuilder:FormBuilder,private ipoService:IpoService,private router:Router) { } 

  ngOnInit() {

    this.updateIPO=this.formBuilder.group({
      id:[],
      companyname:['',Validators.required],
      stockexchanges:['',Validators.required],
      pricepershare:['',Validators.required],
       totalshares:['',Validators.required],
       opendatetime:['',Validators.required],
       remarks:['',Validators.required]

  });

 


 const id=localStorage.getItem('ipoId');

    if(+id>0){
      this.ipoService.getIPOById(+id).subscribe(ipo =>{
        this.updateIPO.patchValue(ipo);

      });
    }
  }
  updateTheIPO(){
    this.ipoService.updateIPOInfo(this.updateIPO.value).subscribe(u=>{
  this.router.navigate(['ipo']);
    });
  }

}
  




