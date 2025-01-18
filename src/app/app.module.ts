import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { MainComponent } from './views/main/main.component';
import { TermsComponent } from './views/terms/terms.component';
import { PolicyComponent } from './views/policy/policy.component';
import { CardInterviewComponent } from './shared/card-interview/card-interview.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainComponent,
    TermsComponent,
    PolicyComponent,
    CardInterviewComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
