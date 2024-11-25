import { Directive, HostBinding, Input } from '@angular/core';
import { CanPreventDirective } from './can-prevent.directive';

@Directive({
  selector: '[canDisable]',
  standalone: true,
  hostDirectives:[CanPreventDirective]
})
export class CanDisableDirective {
  @Input()
  @HostBinding('class.disabled')
  public disabled = false;

  @HostBinding('attr.disabled')
  protected get nativeDisabled(): '' | null {
    return this.disabled ? '' : null;
  }

  
}