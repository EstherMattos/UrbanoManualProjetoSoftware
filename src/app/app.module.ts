import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CadastroModule } from './cadastro/cadastro.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    PagesModule,
    LoginModule,
    CadastroModule,
    PagesRoutingModule,
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
