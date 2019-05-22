import { Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from "../child2/child2.component";

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor() { }
  @ViewChild(Child2Component) child2;
  
  ngOnInit() {
  }
  message:string;

  ngAfterViewInit() {
  this.message=this.child2.child2property;
  }
}
