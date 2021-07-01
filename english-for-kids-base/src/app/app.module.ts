import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClickOutsideModule } from 'ng-click-outside';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  CardDataService,
  GameService,
  InMemoryDataService,
  ModalService,
} from './services';
import {
  CategoryCardsComponent,
  NavigationComponent,
  WordsCardsComponent,
  WordCardComponent,
  ContainerComponent,
  ModeSwitchComponent,
  HeaderComponent,
  StarFieldComponent,
  ModalComponent,
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
    StarFieldComponent,
    ModalComponent,
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
  providers: [CardDataService, GameService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
