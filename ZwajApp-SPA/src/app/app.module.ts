import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './Nav/Nav.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
      
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
