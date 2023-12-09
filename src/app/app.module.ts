import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/components/header/header.component';
import { FooterComponent } from './components/components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/pages/home/home.component';
import { AnalyticsComponent } from './components/pages/analytics/analytics.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ModalTemplateComponent } from './components/components/modal-template/modal-template.component';
import { CardsComponent } from './components/components/cards/cards.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AnalyticsComponent,
    AboutUsComponent,
    ModalTemplateComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
