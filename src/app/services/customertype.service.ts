import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8001";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private http:HttpClient) { }

  getAllCustomerType() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/customerTypes");
  }

  getCustomerTypeById(id){
  	return this.http.get(API_URL+"/api/customerTypes/"+id);
  }
  addCustomerType(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/customerTypes",obj);
  }  
  updateCustomerType(obj){
  	return this.http.put(API_URL+"/api/customerTypes/"+obj.id,obj);
  }
  deleteCustomerType(id){
  	return this.http.delete(API_URL+"/api/customerTypes/"+id);
  }
}
