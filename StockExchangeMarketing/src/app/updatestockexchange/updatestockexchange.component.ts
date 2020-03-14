import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockexchangeService } from '../stockexchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestockexchange',
  templateUrl: './updatestockexchange.component.html',
  styleUrls: ['./updatestockexchange.component.css']
})
export class UpdatestockexchangeComponent implements OnInit {

  updateStockExchange:FormGroup;
  constructor(private formBuilder:FormBuilder,private stockexchangeService:StockexchangeService,private router:Router) { }

  ngOnInit() {


    this.updateStockExchange=this.formBuilder.group({
      id:[],
     stockexchangename:['',Validators.required],
     brief:['',Validators.required],
      address:['',Validators.required],
      remarks:['',Validators.required],
    
    }
    );

    const id=localStorage.getItem('stockExchangeId');

    if(+id>0){
      this.stockexchangeService.getStockExchangeById(+id).subscribe(stockExchange =>{
        this.updateStockExchange.patchValue(stockExchange);

      });
    }
  }
  updateTheStockExchange(){
    this.stockexchangeService.updateStockExchangeInfo(this.updateStockExchange.value).subscribe(u=>{
  this.router.navigate(['stockexchanges']);
    });
  }
}
