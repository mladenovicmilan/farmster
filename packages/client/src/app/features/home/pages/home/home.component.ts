import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../layout';
import { MatButton } from '@angular/material/button';
import { TestSlideToggleComponent } from '../../../test-component/test-slide-toggle/test-slide-toggle.component';

@Component({
  selector: 'app-home',
  imports: [MatButton, TestSlideToggleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
