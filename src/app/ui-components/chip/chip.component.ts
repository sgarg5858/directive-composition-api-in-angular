import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanColorDirective } from 'src/app/directives/can-color.directive';
import { CanAppearanceDirective } from 'src/app/directives/can-appearance.directive';
import { CanDisableDirective } from 'src/app/directives/can-disable.directive';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="chip-text">
      <ng-content></ng-content>
    </span>
    <i (click)="onRemove()" *ngIf="removable" class="chip-remove-icon"></i>
  `,
  styleUrls: ['./chip.component.scss'],
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
export class ChipComponent {
  @Input()
  removable = false;

  @Output()
  removed = new EventEmitter<ChipComponent>();

  onRemove() {
    if (this.removable) {
      this.removed.emit(this);
    }
  }
}
