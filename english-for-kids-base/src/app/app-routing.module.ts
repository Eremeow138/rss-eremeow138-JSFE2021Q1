import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CategoriesComponent,
  CardsListComponent,
  StatisticsComponent,
} from './components';

const routes: Routes = [
  { path: 'main', component: CategoriesComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'categories/:id', component: CardsListComponent },
  { path: '**', redirectTo: 'main' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
