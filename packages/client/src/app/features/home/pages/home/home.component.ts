import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../layout';
import { MatButton } from '@angular/material/button';
import { TestSlideToggleComponent } from '../../../test-component/test-slide-toggle/test-slide-toggle.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatButton, TestSlideToggleComponent, MatCard, MatCardTitle, MatCardTitle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
