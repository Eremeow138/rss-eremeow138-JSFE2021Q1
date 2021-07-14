import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  CardDataService,
  GameService,
  ModalService,
  SortTableService,
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
  AdminPageComponent,
  AdminHeaderComponent,
  UserPageComponent,
  AdminCategoryCardComponent,
  AdminWordsListComponent,
  AdminWordCardComponent,
  AdminCategoriesListComponent,
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
    AdminPageComponent,
    AdminHeaderComponent,
    UserPageComponent,
    AdminCategoryCardComponent,
    AdminWordsListComponent,
    AdminWordCardComponent,
    AdminCategoriesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
  ],
  providers: [
    CardDataService,
    StatisticsDataService,
    GameService,
    ModalService,
    SortTableService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
