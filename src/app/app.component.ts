import { Component } from '@angular/core';
import { CommonService } from './services/commonService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private commonService: CommonService) {
    this.commonService.checkLanguage();
  }
}


