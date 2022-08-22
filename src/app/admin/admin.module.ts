import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BotListComponent } from './components/bot/bot-list/bot-list.component';
import { BotAddEditComponent } from './components/bot/bot-add-edit/bot-add-edit.component';
import { FaqListComponent } from './components/faq/faq-list/faq-list.component';
import { FaqAddEditComponent } from './components/faq/faq-add-edit/faq-add-edit.component';


@NgModule({
  declarations: [
    BotListComponent,
    BotAddEditComponent,
    FaqListComponent,
    FaqAddEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
