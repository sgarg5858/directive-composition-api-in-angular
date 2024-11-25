import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanColorDirective } from 'src/app/directives/can-color.directive';
import { CanDisableDirective } from 'src/app/directives/can-disable.directive';
import { CanAppearanceDirective } from 'src/app/directives/can-appearance.directive';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  template: `<span class="button-label">
    <ng-content></ng-content>
  </span>`,
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance'],
    },
    {
      directive: CanColorDirective,
      inputs: ['color'],
    },
    {
      directive: CanDisableDirective,
      inputs: ['disabled'],
    },
  ],
})
export class ButtonComponent {}
