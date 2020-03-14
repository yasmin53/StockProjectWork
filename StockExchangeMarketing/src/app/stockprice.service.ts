import { Injectable, Inject } from '@angular/core';
import { StockPrice } from './models/stockprices';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {

 // httpUrl='http://localhost:8003/stockprices/';
 httpUrl=environment.host+`stockprice-service/stockprices/`;
  constructor(private httpClient: HttpClient,@Inject(HttpClient) private ht) { }
  getAllStockPrices(): Observable<StockPrice[]> {
    return this.httpClient.get<StockPrice[]>(this.httpUrl);
  }

  saveStockPrice(stockPrice:StockPrice):Observable<StockPrice>{
    return this.ht.post(this.httpUrl, stockPrice);
  }
  deleteStockPrice(id:number):Observable<StockPrice>{
    return this.ht.delete(environment.host+`stockprice-service/stockprices/${id}`);
  }
  updateStockPriceInfo(stockPrice :StockPrice):Observable<StockPrice>{
    return this.ht.put(environment.host+`stockprice-service/stockprices` , stockPrice);
  }
  getStockPriceById(id :number):Observable<StockPrice>{
    return this.ht.get(environment.host+`stockprice-service/stockprices/${id}`);
  }
  //updateStockSheet(formData:FormData): Observable<object>
 // {
//
 // }
}
