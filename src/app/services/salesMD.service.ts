import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8001";

@Injectable({
  providedIn: 'root'
})
export class SalesMDService {

  constructor(private http:HttpClient) { }

  getAllSalesM() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/salesMs");
  }

  getSalesMById(id){
  	return this.http.get(API_URL+"/api/salesMs/"+id);
  }
  addSalesM(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/salesMs",obj);
  }  
  updateSalesM(obj){
  	return this.http.put(API_URL+"/api/salesMs/"+obj.id,obj);
  }
  deleteSalesM(id){
  	return this.http.delete(API_URL+"/api/salesMs/"+id);
  }

  

  getAllSalesD() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/salesDs");
  }

  getSalesDById(id){
  	return this.http.get(API_URL+"/api/salesDs/"+id);
  }
  getSalesDBySalesMId(SalesMId){
    return this.http.get(API_URL+"/api/salesDsBysalesMsId/"+SalesMId);
}
  addSalesD(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/salesDs",obj);
  }  
  addSalesD2(obj){
    return this.http.post(API_URL+"/api/salesDarr",obj);
  }
  updateSalesD(obj){
  	return this.http.put(API_URL+"/api/salesDs/"+obj.id,obj);
  }
  deleteSalesD(id){
  	return this.http.delete(API_URL+"/api/salesDs/"+id);
  }
  deleteSalesD2(arr){
    // return this.http.delete(API_URL+"/api/salesDarr",arr);
    return this.http.request('delete', API_URL+'/api/salesDarr/', { body:arr})
  }
}
