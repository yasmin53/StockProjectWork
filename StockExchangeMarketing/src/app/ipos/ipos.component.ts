import { Component, OnInit } from '@angular/core';
import { IpoService } from '../ipo.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { IPO } from '../models/ipos';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {

  constructor(private ipoService:IpoService, private router:Router,private formBuilder:FormBuilder) { }

  ipos:IPO[];
 
 
  ngOnInit() {


    
    this.ipoService.getAllIPOS().subscribe(data =>{

      this.ipos=data;
  });
  }

  deleteIPO(ipo:IPO){
    this.ipoService.deleteIPO(ipo.id).subscribe();
    this.ipos=this.ipos.filter(u => u !==ipo);
      }
     updateIPO(ipo:IPO){
      localStorage.removeItem('ipoId');
      localStorage.setItem('ipoId',ipo.id.toString());
      this.router.navigate(['updateipo']);
     }

}
