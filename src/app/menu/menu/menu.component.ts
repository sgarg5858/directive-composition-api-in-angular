import { CdkMenu } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template:'<ng-content></ng-content>',
  hostDirectives:[CdkMenu],
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

}
