import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxcontent6',
  templateUrl: './boxcontent6.component.html',
  styleUrls: ['./boxcontent6.component.css']
})
export class Boxcontent6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  modalImg;
  changeModalImg(name){
    this.modalImg = name;
  }
}
