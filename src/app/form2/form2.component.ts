import { Component, OnInit } from '@angular/core';

import { FakturService} from '../services/faktur.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})

export class Form2Component implements OnInit {

  constructor(private fakturSvc: FakturService) {};
  
  //Common Flag
  lastNoFakId=0; lastNoFak='';
  isShowDetail=false;
  captionShowHideDetail='DETAIL';
  noFak='';
  selectedId;
  dataFaktur=[];
  dataFakturDetail=[];
  //---------------------------
  //-- Mode = 1 ==> View/Query Faktur
  //-- Mode = 2 ==> New Faktur
  //-- Mode = 3 ==> Edit Faktur
  mode=1;
  //---------------------------

  //Models
  model = {
  	id:null,
  	noFak:'',
  	tglFak:'',
  	custName:''
  };
  modelDet = {
			  	id:null,
			  	fakturId:null,
			  	prodName:'',
			  	qty:null,
			  	price:null
			  };
  //Working Data for CRUD
  data = {model:Object.create(this.model),modelDet:[]};

  //------------------------------------------------
  // Form Initialization ---------------------------
  //------------------------------------------------
  ngOnInit() {
  	this.getAllFaktur();
  }
  //------------------------------------------------
  // Get Data --------------------------------------
  //------------------------------------------------
  getAllFaktur(){
    this.fakturSvc.getAllFaktur().subscribe(
      (data:any[]) => {
        this.dataFaktur = data;
    });
  }
  getFakturById(id:string){
    this.fakturSvc.getFakturById(id).subscribe(
      (data:any[]) => {
        this.dataFakturDetail = [data];
        this.lastNoFak = data["noFak"];
    });
  }
  //-------------------------------------------------
  showDetail(idx){
  	this.selectedId=idx;  	
  	this.noFak = this.dataFaktur[idx].noFak;
    console.log(" Detail NoFak=>",this.noFak);
    let fakId = this.dataFaktur[idx].id;
    // Get Detail From BackEnd
   	this.fakturSvc.getFakturDetailByFakturId(fakId).subscribe(
   		(data:any[]) => {
   			this.dataFakturDetail = data;
  			if(this.lastNoFakId != idx){
  		 		this.isShowDetail = true;
  		 		this.lastNoFakId = idx;
  		 	}else{
           //teknik togle
  		 		this.isShowDetail = !this.isShowDetail;
  		 	}
   	});
  }
  //-------------------------------------------------
  //------ Master CRUD Operation --------------------
  //-------------------------------------------------
  doNewFaktur(){
    this.mode=2; //Set Mode to 'New'
    //BUGFIX
    this.data.modelDet=[];
    //----- di sini ada bug -------------
    //----- di sini ada bug -------------
    //----- di sini ada bug -------------    
	  this.data.model = Object.create(this.model);	  
  }
  doEditFaktur(idx){
  	this.mode=3;
    this.data.model = this.dataFaktur[idx];
    //BUGFIX
    let fakId = this.dataFaktur[idx].id;
  	//----- di sini ada bug -------------
  	//----- di sini ada bug -------------
    //----- di sini ada bug -------------
    //BUGFIX
  	this.fakturSvc.getFakturDetailByFakturId(fakId).subscribe(
 		(data:any[]) => {
 			this.data.modelDet = data;
 	});
  }
  doDeleteFaktur(idx){
  	//this.dataFaktur.splice(idx,1); //==> delete local data
    let fakId = this.dataFaktur[idx].id;
    this.isShowDetail=false;
  	this.fakturSvc.deleteFaktur( fakId ).subscribe(
  		(res) => {
  			console.log("deleteFaktur res=>",fakId);

			this.fakturSvc.getFakturDetailByFakturId(fakId).subscribe(
		 		(data:any[]) => {		 	
		 							console.log("delete getFakturDetailByFakturId =>",data);
									for(let i=0;i<data.length;i++){
										this.fakturSvc.deleteFakturDetailById(data[i]["id"]).subscribe(
											(res2)=>{
													console.log("deleteFakturDetail res=>",data[i]["id"]);
										});
									}
		 	});
  			this.getAllFaktur();
  		}
  	)
  }  
  //-------------------------------------------------
  //------ Detail CRUD Operation --------------------
  //-------------------------------------------------
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
  doDeleteDetail(idx){
  	//----- di sini ada bug -------------
  	//----- di sini ada bug -------------
    //----- di sini ada bug -------------
    //BUGFIX
  if(this.data.modelDet[idx].id == null){
    this.data.modelDet.splice(idx,1); //==> delete local data
  }
  else{

  }
  
  	this.fakturSvc.deleteFakturDetailById( this.data.modelDet[idx].id ).subscribe(
  		(res) => {
  			console.log("deleteFakturDetail res=>",res);
  			this.data.modelDet.splice(idx,1); //==> delete local data
  			this.getAllFaktur();
  		}
  	)
  }
  //-------------------------------------------------
  //------ Save & Cancel Operation ------------------
  //-------------------------------------------------
  doSave(){
  	if(this.mode==3){
      
  		//edit mode
	  	this.fakturSvc.updateFaktur(this.data.model).subscribe(
	  		(res)=>{
          //---------- get id of master -----------------------------
	  			let fakId = this.data.model.id;	  			
	  			//---------- start updating the detail -------------------------------------------------------------
  				for(let i=0;i<this.data.modelDet.length;i++){
  					if(this.data.modelDet[i].id==null){						
  						//----- detail operation => insert if new detail -----
  						this.data.modelDet[i].fakturId = fakId;
  						this.fakturSvc.addFakturDetail(this.data.modelDet[i]).subscribe(
  	  						(res2)=>{
  	  								console.log("new FakturDetail res=>",res2,i,this.data.modelDet[i]);
  				  		})						
  					}else{
  						//----- detail operation => update if existing detail ------
  						this.fakturSvc.updateFakturDetail(this.data.modelDet[i]).subscribe(
  							(res2)=>{
  									  console.log("update FakturDetail res=>",res2,i,this.data.modelDet[i]);
  						})
  					}
  				}
          //---------- end update the detail -------------------------------------------------------------
          //---------- set mode to view faktur ----
  				this.mode=1;
  				this.getAllFaktur();
  				this.isShowDetail=false;
	  	})
  	}else{
  		//new mode
  		this.fakturSvc.addFaktur(this.data.model).subscribe(
  			(res)=>{
  	  			console.log("addFaktur res=>",res,this.data.modelDet);
  	  			//get new id from backend
  	  			let fakId = res["id"];
  	  			//------ start add all detail -----
  				for(let i=0;i<this.data.modelDet.length;i++){
  					this.data.modelDet[i].fakturId = fakId;
    					this.fakturSvc.addFakturDetail(this.data.modelDet[i]).subscribe(
    						(res)=>{
    								 console.log("addFakturDetail res=>",res);
    					});
  				}
          //-------- end add all detail ---------
          //-------- set mode to view faktur ----
  				this.mode=1;
  				this.getAllFaktur();
          this.isShowDetail=false;
          
  		});
  	}	
  }
  doCancel(){
    //--- cancel operation just set the mode to view faktur ----
  	this.mode=1;
  }  
  //------------------------------------------------
}
