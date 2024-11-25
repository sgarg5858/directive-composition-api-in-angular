import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

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
})
export class ChipComponent {
  @Input() appearance: 'solid' | 'stroked' = 'solid';
  @Input() color: 'primary' | 'secondary' = 'primary';

  @HostBinding('class')
  get computedHostClasses() {
    return {
      [`df-${this.appearance}`]: true,
      [`df-${this.color}`]: true,
    };
  }

  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @HostBinding('attr.disabled')
  get nativeDisabled(): '' | null {
    return this.disabled ? '' : null;
  }
  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
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
