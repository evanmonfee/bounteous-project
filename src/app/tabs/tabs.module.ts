import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabInnerComponent } from './tabs/tab-form/tab-form.component';
import { PageFormComponent } from './tabs/page-form/page-form.component';


@NgModule({
  declarations: [TabsComponent, TabInnerComponent, PageFormComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TabsModule { }
