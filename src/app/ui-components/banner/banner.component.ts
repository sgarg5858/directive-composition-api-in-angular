import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5>Notification:</h5>
    <div class="banner-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() appearance: 'solid' | 'stroked' = 'solid';
  @Input() color: 'primary' | 'secondary' = 'primary';

  @HostBinding('class')
  get computedHostClasses() {
    return {
      [`df-${this.appearance}`]: true,
      [`df-${this.color}`]: true,
    };
  }
}
