import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // global url
  baseUrl = "https://fakestoreapi.com/";
  constructor(private http:HttpClient) { }

  public getAllProducts(){
    return this.http.get(this.baseUrl +"products");
  }

  public getAllCatogries(){
    return this.http.get(this.baseUrl+"products/categories");
  }

  public getProductsByCategory(keyword:string){
    return this.http.get(this.baseUrl+"products/category/"+keyword);
  }

  public getProductById(id:number){
    return this.http.get(this.baseUrl + "products/"+id);
  }
}
