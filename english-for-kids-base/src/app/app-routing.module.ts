import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CategoriesComponent,
  CardsListComponent,
  StatisticsComponent,
  UserPageComponent,
  AdminPageComponent,
} from './components';

const userRoutes: Routes = [
  { path: 'main', component: CategoriesComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'categories/:id', component: CardsListComponent },
];

const adminRoutes: Routes = [];

const appRoutes: Routes = [
  { path: 'user', component: UserPageComponent, children: userRoutes },
  { path: 'admin', component: AdminPageComponent, children: adminRoutes },
  { path: '', redirectTo: 'user/main', pathMatch: 'full' },

  { path: '**', redirectTo: 'user/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
