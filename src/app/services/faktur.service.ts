import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { FAKTURS } from './faktur_data';

const API_URL = "http://localhost:3000";

@Injectable()
export class FakturService {

  constructor(private http:HttpClient) { }

  getAllFaktur() {
    // return FAKTURS;
    return this.http.get(API_URL+"/faktur");
  }

  getFakturById(id){
  	return this.http.get(API_URL+"/faktur/"+id);
  }

  getFakturDetailByFakturId(fakturId){
  	return this.http.get(API_URL+"/faktur_detail?fakturId="+fakturId);
  }

  getFakturDetailById(id){
  	return this.http.get(API_URL+"/faktur_detail?id="+id);
  }
  //------------------------------------------------------------------
  addFaktur(obj){
  	return this.http.post(API_URL+"/faktur",obj);
  }  
  updateFaktur(obj){
  	return this.http.put(API_URL+"/faktur/"+obj.id,obj);
  }
  deleteFaktur(id){
  	return this.http.delete(API_URL+"/faktur/"+id);
  }
  //------------------------------------------------------------------
  addFakturDetail(obj){
  	return this.http.post(API_URL+"/faktur_detail",obj);
  }
  updateFakturDetail(obj){
  	return this.http.put(API_URL+"/faktur_detail/"+obj.id,obj);
  }
  deleteFakturDetailById(id){
  	return this.http.delete(API_URL+"/faktur_detail/"+id);
  }
  deleteFakturDetailByFakturId(fakturId){
  	return this.http.delete(API_URL+"/faktur_detail?fakturId="+fakturId);
  }

}
