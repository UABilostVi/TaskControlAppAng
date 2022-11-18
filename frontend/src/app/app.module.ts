import { NewBoardComponent } from './pages/new-board/new-board.component';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PagesModule,
    HttpClientModule,
    RouterModule
  ],
  entryComponents: [NewBoardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
