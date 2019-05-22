import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:8001";

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http:HttpClient) { }

  getAllColor() {
    // return FAKTURS;
    return this.http.get(API_URL+"/api/colors");
  }

  getColorById(id){
  	return this.http.get(API_URL+"/api/colors/"+id);
  }
  addColor(obj){
    console.log(obj);
  	return this.http.post(API_URL+"/api/colors",obj);
  }  
  updateColor(obj){
  	return this.http.put(API_URL+"/api/colors/"+obj.id,obj);
  }
  deleteColor(id){
  	return this.http.delete(API_URL+"/api/colors/"+id);
  }
}
