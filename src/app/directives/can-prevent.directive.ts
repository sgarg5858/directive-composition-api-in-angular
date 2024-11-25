import { Directive, HostListener, inject } from '@angular/core';
import { CanDisableDirective } from './can-disable.directive';

@Directive({
  selector: '[appCanPrevent]',
  standalone: true
})
export class CanPreventDirective {
  canDisableDir = inject(CanDisableDirective);

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  onClick(e: Event) {
    console.log(e);
    if (this.canDisableDir.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    console.log(e.defaultPrevented);
  }
}
