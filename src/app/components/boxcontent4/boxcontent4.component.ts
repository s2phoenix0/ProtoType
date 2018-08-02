import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxcontent4',
  templateUrl: './boxcontent4.component.html',
  styleUrls: ['./boxcontent4.component.css']
})
export class Boxcontent4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  optionValue1 = "กรุณาเลิอกประเภทห้องที่สนใจ";
  changeOption1(event, item) {
    this.optionValue1 = item;
  }
  onKey(event){
    console.log(event);
  }
}
