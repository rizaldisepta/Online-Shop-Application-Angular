import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../services/customer.service';
import {CustomerTypeService} from '../services/customertype.service';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})


export class Form4Component implements OnInit {
 


  constructor(private customerSvc: CustomerService, private customertypeSvc:CustomerTypeService) {
   
   }

  customertypedata=[];
  selectedcustomertype;
  ngOnInit() {
    console.log("ini muncul")
    this.customertypeSvc.getAllCustomerType().subscribe(
      (data:any[]) => {
        for(var i = 0; i<data.length; i++){
          this.customertypedata.push({label:data[i].name,value:data[i].id})
        }
        // this.customertypedata = data;
      console.log(this.customertypedata)
    });
  
    this.getAllCustomer();
    
  }
 
  mode=1;
  dataCustomer=[];
  lastNoCusId=0;
  lastNoCus='';
  model = {
  	id:null,
  	no:'',
  	customerTypeId:null,
    nama:'',
    alamat:'',
    telp:'',
    kota:'',
    totalHutang:null,
    totalBayar:null,
    active:null
  };

  data = {model:Object.create(this.model)};

  // selectedcustomertypechange(e){
  //   this.data.model.customerTypeId=e.value.id;
  //   console.log(e);
  // }
  getAllCustomer(){
    this.customerSvc.getAllCustomer().subscribe(
      (data:any[]) => {
        this.dataCustomer = data;
        console.log(this.dataCustomer)
    });
  }

  getCustomerById(id:string){
    this.customerSvc.getCustomerById(id).subscribe(
      (data:any[]) => {
        this.dataCustomer = [data];
        this.lastNoCus = data["no"];
    });
  }
  doNewCustomer(){
    //this.mode=2; //Set Mode to 'New'
    //BUGFIX
   
    //----- di sini ada bug -------------
    //----- di sini ada bug -------------
    //----- di sini ada bug -------------    
    this.data.model = Object.create(this.model);	 
    this.mode=2; 
  }
  doEditCustomer(idx){
    //this.mode=3;
    this.mode=2;
    this.data.model = this.dataCustomer[idx];
    console.log("ini"+this.dataCustomer[idx]);
    //BUGFIX
    let custId = this.dataCustomer[idx].id;
  	//----- di sini ada bug -------------
  	//----- di sini ada bug -------------
    //----- di sini ada bug -------------
    //BUGFIX
  	
  }
  doSave(){
      //new mode
      //this.data.model = Object.create(this.model);	 
      if(this.data.model.id==null){
        this.customerSvc.addCustomer(this.data.model).subscribe(
        (res)=>{
          this.getAllCustomer();
       });
      }
      else{
        this.customerSvc.updateCustomer(this.data.model).subscribe(
          (res)=>{  
            this.getAllCustomer();
          }
        )
      }
      
  	}	
    doDeleteCustomer(idx){
      //this.dataFaktur.splice(idx,1); //==> delete local data
      let CustId = this.dataCustomer[idx].id;
      this.customerSvc.deleteCustomer( CustId ).subscribe(
        (res) => {
          console.log("deleteCust res=>",CustId);
          this.getAllCustomer();
        }
      )
    }  
    doCancel(){
      //--- cancel operation just set the mode to view faktur ----
      this.mode=1;
    }  
}
