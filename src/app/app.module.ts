import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuranComponent } from './quran/quran.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule  } from '@angular/common/http';
import { HighlightPipe } from './highlight.pipe';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'surah-details', component: QuranComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuranComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes), 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
