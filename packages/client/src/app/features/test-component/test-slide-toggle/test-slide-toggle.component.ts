import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-test-slide-toggle',
  imports: [
    MatSlideToggleModule
  ],
  templateUrl: './test-slide-toggle.component.html',
  styleUrl: './test-slide-toggle.component.scss'
})
export class TestSlideToggleComponent {

}
