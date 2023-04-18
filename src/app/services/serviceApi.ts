import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServiceApiService {
    private apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tirana?unitGroup=metric&key=JFTUSTH2J2VLQWQ6QXFW3JY9P&contentType=json';
    
    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}