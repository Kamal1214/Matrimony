import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinderCardsPageRoutingModule } from './tinder-cards-routing.module';

import { TinderCardsPage } from './tinder-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinderCardsPageRoutingModule
  ],
  declarations: [TinderCardsPage]
})
export class TinderCardsPageModule {}
