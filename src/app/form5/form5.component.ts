import { Component, OnInit } from '@angular/core';
import { SalesMDService} from '../services/salesMD.service';
import { CustomerService} from '../services/customer.service';
import { ProductService} from '../services/products.service';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})


export class Form5Component implements OnInit {
 


  constructor(private salesSvc: SalesMDService, private customerSvc: CustomerService  ) {
   
   }
   lastNoFakId=0; lastNoFak='';
  isShowDetail=false;
  captionShowHideDetail='DETAIL';
 
  selectedId;
   customerdata=[];
  salesdata=[];
  selectedsales;
  salesdetail=[];
  
  ngOnInit() {
    
    // console.log("ini muncul")
    this.customerSvc.getAllCustomer().subscribe(
      (data:any[]) => {
        for(var i = 0; i<data.length; i++){
          this.customerdata.push({label:data[i].nama,value:data[i].id})
        }
        // this.customertypedata = data;
    
    });
  
    this.getAllSalesM();
    
  }
  nofak='';
  mode=1;
  dataSales=[];
  lastNoSalesId=0;
  lastNoSales='';
  model = {
  	id:null,
  	nofak:'',
  	customerId:null,
    tgl:'',
    total:null,
    disc:null
    
  };

  modelDet = {
    id:null,
    salesMId:null,
    productId:null,
    qty:null,
    productUnitId:null,
    unitPrice:null,
    subtotal:null
  };

  data = {model:Object.create(this.model),modelDet:[]};

  // selectedcustomertypechange(e){
  //   this.data.model.customerTypeId=e.value.id;
  //   console.log(e);
  // }
  getAllSalesM(){
    this.salesSvc.getAllSalesM().subscribe(
      (data:any[]) => {
        this.dataSales = data;
     
    });
  }
  showDetail(idx){
    this.selectedId=idx;  	
  	this.nofak = this.dataSales[idx].nofak;
    console.log(" Detail NoFak=>",this.nofak);
    let salesMId = this.dataSales[idx].id;
    // Get Detail From BackEnd
   	this.salesSvc.getSalesDBySalesMId(salesMId).subscribe(
   		(data:any[]) => {
   			this.salesdetail = data;
  			if(this.lastNoFakId != idx){
  		 		this.isShowDetail = true;
  		 		this.lastNoFakId = idx;
  		 	}else{
           //teknik togle
  		 		this.isShowDetail = !this.isShowDetail;
  		 	}
   	});
  }

  doNewSalesM(){
    //this.mode=2; //Set Mode to 'New'
    //BUGFIX
    this.mode=2; 
    this.data.modelDet=[];
   
    //----- di sini ada bug -------------
    //----- di sini ada bug -------------
    //----- di sini ada bug -------------    
    this.data.model = Object.create(this.model);	 
   
    console.log(this.mode);
    
  }
  doEditSales(idx){
    //this.mode=3;
    this.mode=3;
    // this.data.model = this.dataSales[idx];
    // console.log("ini"+this.dataSales[idx]);
    // console.log(this.mode); 
    // //BUGFIX
    // let salesId = this.dataSales[idx].id;
  	// //----- di sini ada bug -------------
  	// //----- di sini ada bug -------------
    // //----- di sini ada bug -------------
    // //BUGFIX
    // this.salesSvc.getSalesDBySalesMId(salesId).subscribe(
    //   (data:any[]) => {
    //     this.data.modelDet = data;
    // });
    this.data.model = this.dataSales[idx];
    let salesId = this.dataSales[idx].id;
    this.salesSvc.getSalesDBySalesMId(salesId).subscribe(
        (data:any[]) => {
          this.data.modelDet = data;
      });
    //----- di sini ada bug -------------
    //----- di sini ada bug -------------
    //----- di sini ada bug -------------    
   
    console.log(this.mode);
  }
  doSave(){
      //new mode
      if(this.mode==3){
      
     
     this.salesSvc.updateSalesM(this.data.model).subscribe(
      (res)=>{
        let MId = this.data.model.id;
        for(var i=0;i<this.data.modelDet.length;i++){
          this.data.modelDet[i].salesMId=MId;
        }
        this.salesSvc.addSalesD2(this.data.modelDet).subscribe(
          (res:any[])=>{
               console.log("addFakturDetail res=>",res);
        });
        this.mode=1;
        this.getAllSalesM();
        this.isShowDetail=false;
      }
      ) }
      else{
        //new mode
        this.salesSvc.addSalesM(this.data.model).subscribe(
          (res)=>{
              console.log("addFaktur res=>",res,this.data.modelDet);
              //get new id from backend
              let MId = res["id"];
              //------ start add all detail -----
             
              for(var i=0;i<this.data.modelDet.length;i++){
                this.data.modelDet[i].salesMId=MId;
              }
                this.salesSvc.addSalesD2(this.data.modelDet).subscribe(
                  (res:any[])=>{
                       console.log("addFakturDetail res=>",res);
                });
            
            //-------- end add all detail ---------
            //-------- set mode to view faktur ----
            this.mode=1;
            this.getAllSalesM();
            this.isShowDetail=false;
            
        });
      }
      }	
    
    doNewDetail(){
      //----- di sini ada bug -------------
      //----- di sini ada bug -------------
      //----- di sini ada bug -------------
      //parsing by reference
      //parsing by value
      //BUGFIX karena parsing by reference
      this.data.modelDet.push(Object.create(this.modelDet));
     
      console.log(this.modelDet);
      
    }
    doDeleteSales(idx){
      //this.dataFaktur.splice(idx,1); //==> delete local data
      let SalesId = this.dataSales[idx].id;
    
          
          console.log("deleteCust res=>",SalesId);
          this.salesSvc.getSalesDBySalesMId(SalesId).subscribe(
            (res:any[])=>{
             
              console.log("asdas",res);

                this.salesSvc.deleteSalesD2(res).subscribe(
                (res:any) => {
                  console.log(res);
                  this.salesSvc.deleteSalesM( SalesId ).subscribe(
                    (res) => {
                      console.log("deleteFaktur res=>",SalesId);
                      this.getAllSalesM();
                    })
                    
                } )

          }
       
      )
    }  
    doCancel(){
      //--- cancel operation just set the mode to view faktur ----
      this.mode=1;
    }  
}
