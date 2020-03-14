import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StockpriceService } from '../stockprice.service';
@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {
  registerStockPrice:FormGroup;
  constructor(private formBuilder:FormBuilder,private stockpriceService:StockpriceService) { }
  ngOnInit() {
    
    this.registerStockPrice=this.formBuilder.group({
      id: ['', Validators.required],
      companyid: ['', Validators.required],
      currentprice: ['', Validators.required],
      opendatetime: ['', Validators.required]
  
      
      
    });
  }
  addStockPrice(){
    this.stockpriceService.saveStockPrice(this.registerStockPrice.value).subscribe(data =>
      {
        console.log('User Inserted Successfully'+data);
      });
  }
  onSubmit(){
    console.log(this.registerStockPrice.value);
  }
}















