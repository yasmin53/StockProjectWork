import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { StockExchange } from '../models/stockexchanges';

@Component({
  selector: 'app-stockexchanges',
  templateUrl: './stockexchanges.component.html',
  styleUrls: ['./stockexchanges.component.css']
})
export class StockexchangesComponent implements OnInit {

  constructor(private stockexchangeService:StockexchangeService, private router:Router,private formBuilder:FormBuilder) { }

  stockexchanges:StockExchange[];
 
 
  ngOnInit() {


    
    this.stockexchangeService.getAllStockExchanges().subscribe(data =>{

      this.stockexchanges=data;
  });
  }

  deleteStockExchange(stockexchange:StockExchange){
    this.stockexchangeService.deleteStockExchange(stockexchange.id).subscribe();
    this.stockexchanges=this.stockexchanges.filter(u => u !==stockexchange);
      }
     updateStockExchange(stockexchange:StockExchange){
      localStorage.removeItem('stockExchangeId');
      localStorage.setItem('stockExchangeId',stockexchange.id.toString());
      this.router.navigate(['updatestockexchange']);
     }

}
