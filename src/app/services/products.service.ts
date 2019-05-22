import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8001";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProduct() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/products");
  }

  getProductById(id){
  	return this.http.get(API_URL+"/api/products/"+id);
  }
  addProduct(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/products",obj);
  }  
  updateProduct(obj){
  	return this.http.put(API_URL+"/api/products/"+obj.id,obj);
  }
  deleteProduct(id){
  	return this.http.delete(API_URL+"/api/products/"+id);
  }
}
