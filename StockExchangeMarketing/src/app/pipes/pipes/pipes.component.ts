import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  message:string;
  price:number;
  salary:number;
  dob:Date;

  constructor() { }

  ngOnInit() {

    this.message="Today is 30th January 2020"
    this.price=50000;
    this.salary=45665.466;
    this.dob=new Date(1999,5,5,);

  }

}
