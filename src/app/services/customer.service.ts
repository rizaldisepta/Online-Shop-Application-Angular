import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8001";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomer() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/customers");
  }

  getCustomerById(id){
  	return this.http.get(API_URL+"/api/customers/"+id);
  }
  addCustomer(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/customers",obj);
  }  
  updateCustomer(obj){
  	return this.http.put(API_URL+"/api/customers/"+obj.id,obj);
  }
  deleteCustomer(id){
  	return this.http.delete(API_URL+"/api/customers/"+id);
  }
}
