import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceApiService } from 'src/app/services/serviceApi';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data: any;

  constructor(private serviceApi: ServiceApiService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      const response = await this.serviceApi.getData();
      this.data = response;
    } catch (error) {
      console.error(error);
    }
  }
}









