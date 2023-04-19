import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Weather {
    address: string;
    currentConditions : {
        temp: number;
    }
}
    
@Injectable({
    providedIn: 'root'
})
export class ServiceApiService {

    apiUrl = environment.weatherApi.apiUrl;
    apiKey = environment.weatherApi.apiKey;
    
    constructor(private http: HttpClient) { }

    getData(): Observable<Weather> {
        const url = `${this.apiUrl}/Tirana?unitGroup=metric&key=${this.apiKey}&contentType=json`
        return this.http.get<Weather>(url);
    }
}