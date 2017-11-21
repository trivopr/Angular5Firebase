import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
// import {MatMenuModule} from '@angular/material/menu';

import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/company.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

import {
  MatToolbarModule, MatFormFieldModule, MatInputModule
} from '@angular/material';


const firebaseConfig = {
  apiKey: 'AIzaSyCgbN_LziBVDmy25h7TT6Jah6RFDGcqlGs',
  authDomain: 'angularfireappone.firebaseapp.com',
  databaseURL: 'https://angularfireappone.firebaseio.com',
  projectId: 'angularfireappone',
  storageBucket: 'angularfireappone.appspot.com',
  messagingSenderId: '757259055195'
};

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
