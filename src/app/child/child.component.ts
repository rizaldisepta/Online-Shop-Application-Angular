import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string;
  @Input() models: any;
  @Input() labelmodel: any;
 
  @Output() clickEvent=new EventEmitter<any>();
  constructor() { }
  
  ngOnInit() {
  }
 
  textnama="";
  textalamat="";
  textno="";

  model={
    nama:"",
    alamat:"",
    no:""
  }
  btnclick(){
  
    this.clickEvent.emit(this.labelmodel);
    
  }
}
