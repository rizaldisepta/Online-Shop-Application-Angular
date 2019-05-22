import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8001";

@Injectable({
  providedIn: 'root'
})
export class PriceListService {

  constructor(private http:HttpClient) { }

  getAllPriceList() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/pricelists");
  }

  getPriceListById(id){
  	return this.http.get(API_URL+"/api/pricelists/"+id);
  }
  addPriceList(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/pricelists",obj);
  }  
  updatePriceList(obj){
  	return this.http.put(API_URL+"/api/pricelists/"+obj.id,obj);
  }
  deletePriceList(id){
  	return this.http.delete(API_URL+"/api/pricelists/"+id);
  }
}
