import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-test-slide-toggle',
  imports: [
    MatSlideToggleModule,
    MatAutocomplete,
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
  ],
  templateUrl: './test-slide-toggle.component.html',
  styleUrl: './test-slide-toggle.component.scss',
})
export class TestSlideToggleComponent {}
