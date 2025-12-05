import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './features/suggestions/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {path : '' , redirectTo : '/product', pathMatch: 'full' }, // route par défaut
  {path : 'product' , component : HomeComponent },
  {path : 'detail/:id' , component:DetailProdComponent},
  {path : 'addP',  component:ReactiveComponent},
  {path : 'reactive' , component:ReactiveComponent},
  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
  { path : '**', component: NotFoundComponent },  // route pour les pages non trouvées

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
