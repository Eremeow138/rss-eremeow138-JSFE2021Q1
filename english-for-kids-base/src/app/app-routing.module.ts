import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCardsComponent, WordsCardsComponent } from './components';

const routes: Routes = [
  { path: 'main', component: CategoryCardsComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'categories/:id', component: WordsCardsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
