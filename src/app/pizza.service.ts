import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor( private http:HttpClient) { }
  newOrder(data:any){
    return this.http.post(`http://localhost:3000/userdata`,data);
  }
}
