import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StockExchange } from './models/stockexchanges';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {

  //httpUrl='http://localhost:8765/stockexchange-service/stockexchanges/';
  httpUrl=environment.host+`stockexchange-service/stockexchanges/`;
  
  constructor(private httpClient: HttpClient,@Inject(HttpClient) private ht) { }
  getAllStockExchanges(): Observable<StockExchange[]> {
    return this.httpClient.get<StockExchange[]>(this.httpUrl);
  }

  saveStockExchange(stockExchange:StockExchange):Observable<StockExchange>{
    return this.ht.post(this.httpUrl, stockExchange);
  }
  deleteStockExchange(id:number):Observable<StockExchange>{
    return this.ht.delete(environment.host+`stockexchange-service/stockexchanges/${id}`);
  }
  updateStockExchangeInfo(stockExchange :StockExchange):Observable<StockExchange>{
    return this.ht.put(environment.host+`stockexchange-service/stockexchanges` , stockExchange);
  }
  getStockExchangeById(id :number):Observable<StockExchange>{
    return this.ht.get(environment.host+`stockexchange/stockexchanges/${id}`);
  }
}
