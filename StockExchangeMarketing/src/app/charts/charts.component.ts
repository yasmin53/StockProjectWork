import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from '../upload.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
//   title = 'myHighchart';
//   data = [{
//           name: 'ItSolutionStuff.com',
//           data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
//        },{
//           name: 'Nicesnippets.com',
//           data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
//        }];
//   highcharts = Highcharts;
//   chartOptions = {   
//     chart: {
//        type: "column"
//     },
//     title: {
//        text: "Monthly Site Visitor"
//     },
//     xAxis:{
//        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//     },
//     yAxis: {          
//        title:{
//           text:"Visitors"
//        } 
//     },
//     series: this.data
//   };
//   constructor() { }
//   ngOnInit() {
//   }
compareData: any;
   constructor(private uploadService: UploadService, private route: ActivatedRoute) { }
   chartOne = Highcharts;
   chartOneOptions: any;
   getFirstDataComplete: boolean = false;
   getSecondDataComplete: boolean = false;
   ngOnInit() {
      this.compareData = JSON.parse(this.route.snapshot.queryParams.formData);
       let series: any = []
           let categories: any[] = [];
           this.uploadService.getCompanyStockPricesBetween(this.compareData.cnsn, this.compareData.seselect, this.compareData.fperiod, this.compareData.tperiod).subscribe(data => {
               let companyOneData: any[] = [];
                console.log(companyOneData)
               data.forEach((stockPrice) => {
                   categories.push(stockPrice.dataPoint);
                   companyOneData.push(stockPrice.dataValue)
               })
               let seriesDataMemberOne = {
                   name: this.compareData.cnsn + " (" + this.compareData.seselect + ")",
                   data: companyOneData
               }
               series[0] = seriesDataMemberOne;
               setTimeout(()=>{
                  this.getFirstDataComplete = true;
               },2000);
               this.uploadService.getCompanyStockPricesBetween(this.compareData.ctcnsn, this.compareData.seselect, this.compareData.fperiod, this.compareData.tperiod).subscribe(data => {
               let companyTwoData: any[] = [];
               data.forEach((stockPrice) => {
                   if (categories.includes(stockPrice.dataPoint)) {
                       companyTwoData.push(stockPrice.dataValue)
                   }
               })
               let seriesDataMemberTwo = {
                   name: this.compareData.ctcnsn + " (" + this.compareData.seselect + ")",
                   data: companyTwoData
               }
               series[1] = seriesDataMemberTwo;
               
           });
           this.chartOneOptions = {
               chart: {
                   type: "column"
               },
               title: {
                   text: "Stock Comparision Chart"
               },
               xAxis: {
                   categories: categories
               },
               yAxis: {
                   title: {
                       text: "Stock Price"
                   }
               },
               series: series
           }
           setTimeout(()=>{
            this.getSecondDataComplete = true;
         },2000)
           });
       }
}