import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanAppearanceDirective } from 'src/app/directives/can-appearance.directive';
import { CanColorDirective } from 'src/app/directives/can-color.directive';

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
  hostDirectives: [
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance'],
    },
    {
      directive: CanColorDirective,
      inputs: ['color'],
    },
  ],
})
export class BannerComponent {}
