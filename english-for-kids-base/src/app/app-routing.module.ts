import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import {
  CategoriesComponent,
  CardsListComponent,
  StatisticsComponent,
  UserPageComponent,
  AdminPageComponent,
  AdminCategoriesListComponent,
  AdminWordsListComponent,
} from './components';

const userRoutes: Routes = [
  { path: 'main', component: CategoriesComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'categories/:id', component: CardsListComponent },
];

const adminRoutes: Routes = [
  { path: 'categories', component: AdminCategoriesListComponent },
  { path: 'category/:id', component: AdminWordsListComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: '**', redirectTo: 'categories' },
];

const appRoutes: Routes = [
  { path: 'user', component: UserPageComponent, children: userRoutes },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: adminRoutes,
    canActivate: [AdminGuard],
  },
  { path: '', redirectTo: 'user/main', pathMatch: 'full' },
  { path: '**', redirectTo: 'user/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
