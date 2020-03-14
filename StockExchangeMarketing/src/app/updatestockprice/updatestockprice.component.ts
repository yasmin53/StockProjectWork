import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockpriceService } from '../stockprice.service';

@Component({
  selector: 'app-updatestockprice',
  templateUrl: './updatestockprice.component.html',
  styleUrls: ['./updatestockprice.component.css']
})
export class UpdatestockpriceComponent implements OnInit {


  updateStockPrice:FormGroup;
  constructor(private formBuilder:FormBuilder,private stockpriceService:StockpriceService,private router:Router) { }

  ngOnInit() {


    this.updateStockPrice=this.formBuilder.group({
      id:[],
     companyid:['',Validators.required],
     currentprice:['',Validators.required],
      opendatetime:['',Validators.required],
     
    } 
    );

    const id=localStorage.getItem('stockpriceId');

    if(+id>0){
      this.stockpriceService.getStockPriceById(+id).subscribe(stockprice =>{
        this.updateStockPrice.patchValue(stockprice);

      });
    }
  }
  updateTheStockPrice(){
    this.stockpriceService.updateStockPriceInfo(this.updateStockPrice.value).subscribe(u=>{
  this.router.navigate(['stockprice']);
    });
  }
  }


