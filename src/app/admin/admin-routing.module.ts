import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotAddEditComponent } from './components/bot/bot-add-edit/bot-add-edit.component';
import { BotListComponent } from './components/bot/bot-list/bot-list.component';
import { FaqAddEditComponent } from './components/faq/faq-add-edit/faq-add-edit.component';
import { FaqListComponent } from './components/faq/faq-list/faq-list.component';

const routes: Routes = [
  {
    path: '**',
    component: BotListComponent
  },
  {
    path: 'bot',
    component: BotListComponent
  },
  {
    path: 'bot/create',
    component: BotAddEditComponent
  },
  {
    path: 'bot/edit/:id',
    component: BotAddEditComponent
  },
  {
    path: 'faq',
    component: FaqListComponent
  },
  {
    path: 'faq/create',
    component: FaqAddEditComponent
  },
  {
    path: 'faq/edit/:id',
    component: FaqAddEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
