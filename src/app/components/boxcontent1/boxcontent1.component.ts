import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../../services/slideAnimation';

@Component({
  selector: 'app-boxcontent1',
  templateUrl: './boxcontent1.component.html',
  styleUrls: ['./boxcontent1.component.css'],
  animations: [SlideInOutAnimation]
})
export class Boxcontent1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menu = '3';

  toggleShowDiv(divName: string) {
    if (divName == '1') {
      this.menu = divName;
    }
    if (divName == '2') {
      this.menu = divName;
    }
    if (divName == '3') {
      this.menu = divName;
    }
  }
  
}
