import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IpoService } from '../ipo.service';
@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

  registerIPO:FormGroup;

  constructor(private formBuilder:FormBuilder,private ipoService:IpoService) { }

  ngOnInit() {

    this.registerIPO=this.formBuilder.group({

      id:['', Validators.required],
     companyname: ['', Validators.required],
     stockexchanges:['', Validators.required],
     pricepershare:['', Validators.required],
     totalshares:['', Validators.required],
     opendatetime:['', Validators.required],
     remarks:['', Validators.required]


  });


}
addIPO(){
  this.ipoService.saveIPO(this.registerIPO.value).subscribe(data =>
    {
      console.log('User Inserted Successfully'+data);
    });

}

onSubmit(){
  console.log(this.registerIPO.value);
}

}

