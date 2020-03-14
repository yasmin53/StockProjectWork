import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockexchangeService } from '../stockexchange.service';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  registerStockExchange:FormGroup;

  constructor(private formBuilder:FormBuilder,private stockexchangeService:StockexchangeService) { }

  ngOnInit() {

    
    this.registerStockExchange=this.formBuilder.group({

      id: ['', Validators.required],
      stockexchangename: ['', Validators.required],
      brief: ['', Validators.required],
      address: ['', Validators.required],
      remarks: ['', Validators.required],
      
      
    });
  }


  addStockExchange(){
    this.stockexchangeService.saveStockExchange(this.registerStockExchange.value).subscribe(data =>
      {
        console.log('User Inserted Successfully'+data);
      });

  }

  onSubmit(){
    console.log(this.registerStockExchange.value);
  }

}
