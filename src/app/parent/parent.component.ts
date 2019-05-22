import { Component, OnInit } from '@angular/core';
import  {ChildComponent} from '../child/child.component';
import { namespaceHTML } from '@angular/core/src/render3/instructions';
import { DataService } from "../services/data.service";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private data: DataService) { }
  message:string;
  parentmessage="sadsadasd";


  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
btnClick(e){
  console.log(e);
  
}

modelparent={
  nama:"aldi",
  alamat:"sunter",
  no:"1"
}

modellabel=[
  {label:"nama",value:"aldi",type:"text"},
  {label:"alamat",value:"alamat",type:"text"},
  {label:"no",value:"123",type:"number"}
]

}
