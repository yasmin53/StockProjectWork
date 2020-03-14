import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {  StockPrice } from '../models/stockprices';


@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprices.component.html',
  styleUrls: ['./stockprices.component.css']
})
export class StockpricesComponent implements OnInit {

  constructor(private stockpriceService:StockpriceService, private router:Router,private formBuilder:FormBuilder) { }

  stockprices:StockPrice[];
 
 
  ngOnInit() {


    
    this.stockpriceService.getAllStockPrices().subscribe(data =>{

      this.stockprices=data;
  });
  }

  deleteStockPrice(stockprice:StockPrice){
    this.stockpriceService.deleteStockPrice(stockprice.id).subscribe();
    this.stockprices=this.stockprices.filter(u => u !==stockprice);
      }
     updateStockPrice(stockprice:StockPrice){
      localStorage.removeItem('stockPriceId');
      localStorage.setItem('stockPriceId',stockprice.id.toString());
      this.router.navigate(['updatestockprice']);
     }

}
