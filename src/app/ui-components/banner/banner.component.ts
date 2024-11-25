import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../base.component';

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
export class BannerComponent extends BaseComponent{
  
}
