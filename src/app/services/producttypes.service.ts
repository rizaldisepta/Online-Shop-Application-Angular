import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8001";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor(private http:HttpClient) { }

  getAllProductType() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/producttypes");
  }

  getProductTypeById(id){
  	return this.http.get(API_URL+"/api/producttypes/"+id);
  }
  addProductType(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/producttypes",obj);
  }  
  updateProductType(obj){
  	return this.http.put(API_URL+"/api/producttypes/"+obj.id,obj);
  }
  deleteProductType(id){
  	return this.http.delete(API_URL+"/api/producttypes/"+id);
  }
}
