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
  StatisticsDataService,
} from './services';
import {
  CategoriesComponent,
  NavigationComponent,
  CardsListComponent,
  CardComponent,
  ContainerComponent,
  ModeSwitchComponent,
  HeaderComponent,
  StarFieldComponent,
  ModalComponent,
  StatisticsComponent,
  FooterComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NavigationComponent,
    CardsListComponent,
    CardComponent,
    ContainerComponent,
    ModeSwitchComponent,
    HeaderComponent,
    StarFieldComponent,
    ModalComponent,
    StatisticsComponent,
    FooterComponent,
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
  providers: [
    CardDataService,
    StatisticsDataService,
    GameService,
    ModalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
