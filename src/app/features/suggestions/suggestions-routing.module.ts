import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetainsSuggestionsComponent } from './detains-suggestions/detains-suggestions.component';

const routes: Routes = [
  {path: '', component: ListSuggestionComponent },
  {path : 'detail/:id' , component:DetainsSuggestionsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
