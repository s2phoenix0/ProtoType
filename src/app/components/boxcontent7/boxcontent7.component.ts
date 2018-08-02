import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../../services/slideAnimation';

@Component({
  selector: 'app-boxcontent7',
  templateUrl: './boxcontent7.component.html',
  styleUrls: ['./boxcontent7.component.css'],
  animations: [SlideInOutAnimation]
})
export class Boxcontent7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  
  currentRoom = {
    number : '705',
    plan : '../../../assets/705/1.jpg',
    totalImg : 10
  }
  
  modalImg;
  changeModalImg(name){
    this.modalImg = name;
  }
  floor = '7'
  changeFloor(floor){
    this.floor = floor;
  }
  room = '705'
  showRoom(room){
    this.room = room;
    this.currentRoom = {
        number : '705',
        plan : '../../../assets/'+this.room+'/1.jpg',
        totalImg : 10
    }
  }
}
