import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   // global url
   baseUrl = "https://fakestoreapi.com/";

  constructor(private http: HttpClient) { }

  public addNewCart(model:any){
    return this.http.post(this.baseUrl+"carts",model);
  }
}
