import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
    

    $('.carousel').carousel({
      interval: 3000
  });
    
  }

}
