import { CdkMenuTrigger } from '@angular/cdk/menu';
import { Directive } from '@angular/core';

@Directive({
  selector: 'button[appMenuTrigger]',
  hostDirectives:[{
    directive:CdkMenuTrigger,
    inputs:['cdkMenuTriggerFor:panel']
  }],
})
export class MenuTriggerDirective {

  constructor() { }

}
