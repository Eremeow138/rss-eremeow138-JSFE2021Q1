import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClickOutsideModule } from 'ng-click-outside';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardDataService, GameService, InMemoryDataService } from './services';
import {
  CategoryCardsComponent,
  NavigationComponent,
  WordsCardsComponent,
  WordCardComponent,
  ContainerComponent,
  ModeSwitchComponent,
  HeaderComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    CategoryCardsComponent,
    NavigationComponent,
    WordsCardsComponent,
    WordCardComponent,
    ContainerComponent,
    ModeSwitchComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    ClickOutsideModule,
  ],
  providers: [CardDataService, GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
