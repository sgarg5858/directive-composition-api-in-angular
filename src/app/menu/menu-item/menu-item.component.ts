import { CdkMenuItem } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  template:'<ng-content></ng-content>',
  hostDirectives:[{
    directive:CdkMenuItem,
    inputs:['cdkMenuItemDisabled: disabled']
  }],
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

}
