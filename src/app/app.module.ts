import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResumenComponentComponent } from './resumen-component/resumen-component.component';
import { AccountsComponentComponent } from './accounts-component/accounts-component.component';
import { TransactionsComponentComponent } from './transactions-component/transactions-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResumenComponentComponent,
    AccountsComponentComponent,
    TransactionsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
