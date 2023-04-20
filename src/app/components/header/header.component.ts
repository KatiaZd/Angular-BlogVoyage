import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceApiService, Weather } from 'src/app/services/serviceApi';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data?: Weather;

  constructor(private serviceApi: ServiceApiService) { }

  ngOnInit() {
    this.serviceApi.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}









