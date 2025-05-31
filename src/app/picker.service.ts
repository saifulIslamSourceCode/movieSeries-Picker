import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PickerService {

  private apiKey = '15c9af83';
  private apiUrl = 'http://www.omdbapi.com/'

  constructor(private http: HttpClient { }

  movieSerisePicker(): Observable<any>{

  return this.http.get(url);
  }
}
