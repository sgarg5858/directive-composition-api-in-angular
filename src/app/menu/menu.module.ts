import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import {CdkMenuModule} from '@angular/cdk/menu';
import { MenuTriggerDirective } from './menu-trigger.directive'


@NgModule({
  declarations: [MenuComponent,MenuItemComponent, MenuTriggerDirective],
  imports: [
    CommonModule,CdkMenuModule
  ],
  exports:[MenuComponent,MenuItemComponent,MenuTriggerDirective]
})
export class MenuModule { }
