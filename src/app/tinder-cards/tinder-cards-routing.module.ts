import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinderCardsPage } from './tinder-cards.page';

const routes: Routes = [
  {
    path: '',
    component: TinderCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinderCardsPageRoutingModule {}
