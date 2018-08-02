import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment} from '../environments/environment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CommonService } from './services/commonService';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { VRViewModule } from 'angular-vrviewer';
import { Boxcontent1Component } from './components/boxcontent1/boxcontent1.component';
import { Boxcontent2Component } from './components/boxcontent2/boxcontent2.component';
import { Boxcontent3Component } from './components/boxcontent3/boxcontent3.component';
import { Boxcontent4Component } from './components/boxcontent4/boxcontent4.component';
import { Boxcontent5Component } from './components/boxcontent5/boxcontent5.component';
import { Boxcontent6Component } from './components/boxcontent6/boxcontent6.component';
import { Boxcontent7Component } from './components/boxcontent7/boxcontent7.component';
import { Boxcontent8Component } from './components/boxcontent8/boxcontent8.component';

@NgModule({
  declarations: [
    AppComponent,
    Boxcontent1Component,
    Boxcontent2Component,
    Boxcontent3Component,
    Boxcontent4Component,
    Boxcontent5Component,
    Boxcontent6Component,
    Boxcontent7Component,
    Boxcontent8Component
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCSuKcgdJBslDc5lKzcvwD0he90_KjJiyA'
    }),
    AngularFireModule.initializeApp(environment.belgravia),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ScrollToModule.forRoot(),
    VRViewModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
