import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetainsSuggestionsComponent } from './detains-suggestions/detains-suggestions.component';


@NgModule({
  declarations: [
    ListSuggestionComponent,
    DetainsSuggestionsComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }
