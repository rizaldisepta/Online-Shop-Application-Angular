import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8001";

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  constructor(private http:HttpClient) { }

  getAllBarcode() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/barcodes");
  }

  getBarcodeById(id){
  	return this.http.get(API_URL+"/api/barcodes/"+id);
  }
  addBarcode(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/barcodes",obj);
  }  
  updateBarcode(obj){
  	return this.http.put(API_URL+"/api/barcodes/"+obj.id,obj);
  }
  deleteBarcode(id){
  	return this.http.delete(API_URL+"/api/barcodes/"+id);
  }
}
