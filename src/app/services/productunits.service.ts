import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8001";

@Injectable({
  providedIn: 'root'
})
export class ProductUnitService {

  constructor(private http:HttpClient) { }

  getAllProductUnit() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/productunits");
  }

  getProductUnitById(id){
  	return this.http.get(API_URL+"/api/productunits/"+id);
  }
  addProductUnit(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/productunits",obj);
  }  
  updateProductUnit(obj){
  	return this.http.put(API_URL+"/api/productunits/"+obj.id,obj);
  }
  deleteProductUnit(id){
  	return this.http.delete(API_URL+"/api/productunits/"+id);
  }
}
