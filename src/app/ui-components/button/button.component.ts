import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  template: `<span class="button-label">
    <ng-content></ng-content>
  </span>`,
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends BaseComponent {}
