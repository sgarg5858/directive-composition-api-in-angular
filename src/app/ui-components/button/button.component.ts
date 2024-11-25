import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  template:`<span class="button-label">
  <ng-content></ng-content>
</span>`,
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./button.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() appearance : 'solid' | 'stroked' = 'solid';
  @Input() color : 'primary' | 'secondary' = 'primary';
  
  @HostBinding('class')
  get computedHostClasses()
  {
    return  {
      [`df-${this.appearance}`]: true,
      [`df-${this.color}`]: true,
    }
  }

  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @HostBinding('attr.disabled')
  get nativeDisabled(): '' | null
  {
    return this.disabled ? '' : null;
  }
  @HostListener('click',['$event'])
  @HostListener('dblclick',['$event'])
  onClick(event: Event){
    if(this.disabled)
    {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  
}
